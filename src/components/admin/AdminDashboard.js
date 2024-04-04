import React, { useEffect } from "react";
import { useRecoilState } from "recoil";

import { orderState } from "../../state";

const AdminDashboard = () => {
  const [orderData, setOrderData] = useRecoilState(orderState);

  useEffect(() => {
    setOrderData(JSON.parse(window.localStorage.getItem("order")));
  }, [setOrderData]);

  const handleOrderStatusUpdate = (state, status) => {
    const newOrderStatus = { ...orderData };
    newOrderStatus.status = state ? status : orderData.status;

    setOrderData(newOrderStatus);

    window.localStorage.setItem("order", JSON.stringify(newOrderStatus));
  };

  return (
    <div className="flex justify-center items-center w-full h-fit">
      <div className="w-full ">
        <h1 className="bg-slate-300 font-bold text-center mt-28 text-2xl p-5 ">
          Admin dashboard
        </h1>

        <div className="border flex justify-center items-center flex-col ml-auto mr-auto mt-6 text-xl rounded-lg w-[90%] h-[150px] shadow-2xl">
          <h2 className="font-bold text-center p-3 mb-5">Order Status</h2>
          <div className="flex space-x-2 items-center justify-center gap-5 text-center">
            <label htmlFor="">Recived Order</label>
            <input
              type="checkbox"
              name=""
              id=""
              checked={orderData.status === "BOOKED"}
              readOnly
            />
            <label htmlFor="">Confirmed Order</label>
            <input
              type="checkbox"
              name=""
              id=""
              checked={orderData.status === "CONFIRMED"}
              onChange={(event) =>
                handleOrderStatusUpdate(event.target.checked, "CONFIRMED")
              }
            />
            <label htmlFor="">Prepare Order</label>
            <input
              type="checkbox"
              name=""
              id=""
              checked={orderData.status === "PREPARING"}
              onChange={(event) =>
                handleOrderStatusUpdate(event.target.checked, "PREPARING")
              }
            />
            <label htmlFor="">Way to Deliver the Order</label>
            <input
              type="checkbox"
              name=""
              id=""
              checked={orderData.status === "OUT FOR DELIVERY"}
              onChange={(event) =>
                handleOrderStatusUpdate(
                  event.target.checked,
                  "OUT FOR DELIVERY"
                )
              }
            />
            <label htmlFor="">Delivered</label>
            <input
              type="checkbox"
              name=""
              id=""
              checked={orderData.status === "DELIVERED"}
              onChange={(event) =>
                handleOrderStatusUpdate(event.target.checked, "DELIVERED")
              }
            />
          </div>
        </div>
        <div className="w-[70%] rounded-md mt-5 shadow-xl mr-auto ml-auto">
          <h1 className=" text-center text-xl font-bold p-3">Order Recieved</h1>
          {orderData?.cart?.map((item) => (
            <div
              key={item.id}
              className="border  bg-slate-200 rounded-md shadow-xl m-5 p-1"
            >
              <p>Name: {item.name}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price * item.quantity}</p>
            </div>
          ))}
          <br />
          <p className="bg-blue-200 text-xl font-bold p-5">
            Total: ${orderData?.total?.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
