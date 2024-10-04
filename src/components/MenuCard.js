import React from "react";
import { useRecoilState } from "recoil";
import { ToastContainer, toast } from "react-toastify";
import { cartListState, masterListState } from "../state";

import Pic1 from "./PizzaImages/Margherita.PNG";
import Pic2 from "./PizzaImages/Pepperoni.PNG";
import Pic3 from "./PizzaImages/Vegetarian.PNG";
import Pic4 from "./PizzaImages/TomatoPizza.PNG";
import Pic5 from "./PizzaImages/Hawaiian.PNG";

const MenuCard = ({ pizza }) => {
  const [masterData, setMasterData] = useRecoilState(masterListState);
  const [cartData, setCartData] = useRecoilState(cartListState);

  const handleAddToCart = (id) => {
    const masterCopy = [...masterData];
    const cartCopy = [...cartData];

    const selectedItem = masterCopy.findIndex((item) => item.id === id);

    if (masterCopy[selectedItem].quantity > 0) {
      const isPresentInCart = cartCopy.findIndex((item) => item.id === id);

      if (isPresentInCart !== -1) {
        const newItem = { ...cartCopy[isPresentInCart] };
        newItem.quantity++;
        cartCopy.splice(isPresentInCart, 1, newItem);
        setCartData(cartCopy);
      } else {
        const newItem = { ...masterCopy[selectedItem] };
        newItem.quantity = 1;
        cartCopy.push(newItem);
        setCartData(cartCopy);
      }

      const newMasterItem = { ...masterCopy[selectedItem] };
      newMasterItem.quantity--;
      masterCopy.splice(selectedItem, 1, newMasterItem);
      setMasterData(masterCopy);

      localStorage.setItem("master", JSON.stringify(masterCopy));
    } else {
      notify();
    }
  };

  const notify = () => toast("Can't Add");

  const pizzas = [Pic1, Pic2, Pic3, Pic4, Pic5];

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-xl mt-16 mb-10">
      <img
        className="w-full h-64 object-cover"
        src={pizzas[pizza.id - 1]}
        alt={pizza.name}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-center text-xl mb-2">{pizza.name}</div>
        <p className="text-gray-700 text-base">{pizza.description}</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          ₹{pizza.price}
        </span>
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-full"
          onClick={() => handleAddToCart(pizza.id)}
        >
          Add to Cart
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default MenuCard;
