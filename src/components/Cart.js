import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

import { cartListState, orderState } from "../state";

const Cart = () => {
  const navigate = useNavigate();

  const [cartData, setCartData] = useRecoilState(cartListState);

  const setOrderData = useSetRecoilState(orderState);

  const total = cartData.reduce((acc, item) => {
    acc += item.price * item.quantity;
    return acc;
  }, 0);

  const loadScript = (src) =>
    new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        console.log("razorpay loaded successfully");
        resolve(true);
      };
      script.onerror = () => {
        console.log("error in loading razorpay");
        resolve(false);
      };
      document.body.appendChild(script);
    });

  const displayRazorpay = async (options) => {
    await loadScript("https://checkout.razorpay.com/v1/checkout.js");

    const rzp1 = new window.Razorpay(options);

    rzp1.open();
  };

  return (
    <div className="w-full h-[100vh] flex justify-center mb-8">
      <div className="mt-36 bg-slate-100 shadow-2xl rounded-2xl p-6 w-[90%] h-fit">
        <h1 className="bg-slate-300 text-2xl p-3 shadow-2xl mb-10 rounded-lg w-fit">
          Cart Items
        </h1>
        {cartData.map((item) => (
          <div
            key={item.id}
            className="border  bg-slate-200 rounded-md shadow-lg m-3 flex justify-between items-center text-left p-4"
          >
            <p>Name: {item.name}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.price * item.quantity}</p>
          </div>
        ))}
        <p>Total: ${total.toFixed(2)}</p>
        <div className="flex items-end ml-[800px] p-2 gap-11 mt-8">
          <button
            className="bg-red-300 p-3 rounded-md shadow-xl"
            onClick={() => navigate("/")}
          >
            Back
          </button>
          <button
            className="bg-blue-400 p-3 rounded-md shadow-xl"
            onClick={() => {
              setCartData([]);

              setOrderData({
                status: "BOOKED",
                cart: cartData,
                total,
              });

              window.localStorage.setItem(
                "order",
                JSON.stringify({
                  status: "BOOKED",
                  cart: cartData,
                  total,
                })
              );

              displayRazorpay({
                key: "rzp_test_YsmTMZihOBVTve",
                amount: total * 100,
              });
            }}
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
