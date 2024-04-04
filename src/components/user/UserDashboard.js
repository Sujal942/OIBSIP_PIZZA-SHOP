import { useEffect } from "react";
import { useRecoilState } from "recoil";

import { orderState } from "../../state";

const UserDashboard = () => {
  const [orderData, setOrderData] = useRecoilState(orderState);

  useEffect(() => {
    setOrderData(JSON.parse(window.localStorage.getItem("order")));
  }, [setOrderData]);

  return (
    <div className="container mx-auto py-4">
      {Object.keys(orderData).length > 0 ? (
        <>
          <h1 className="text-xl p-5 bg-slate-200">
            <strong>Current Order</strong>
          </h1>
          <br />
          <p className="mr-auto ml-auto text-xl bg-orange-300 p-4 w-fit rounded-md shadow-xl">
            Order Status: <strong>{orderData.status}</strong>
          </p>
          <br />
          {orderData.cart.map((item) => (
            <div
              key={item.id}
              className="border bg-slate-200 rounded-md shadow-xl m-5 p-1"
            >
              <p>Name: {item.name}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price * item.quantity}</p>
            </div>
          ))}
          <br />
          <p className="bg-blue-200 text-xl font-bold p-5 ">
            Total: ${orderData.total.toFixed(2)}
          </p>
        </>
      ) : (
        <p>No Active Orders</p>
      )}
    </div>
  );
};

export default UserDashboard;
