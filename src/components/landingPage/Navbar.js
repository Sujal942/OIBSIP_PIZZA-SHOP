import React from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

import LandingPage from "./LandingPage";
import UserRegister from "../user/UserRegister";
import UserDashboard from "../user/UserDashboard";
import AdminRegistrationPage from "../admin/AdminRegistrationPage";
import AlreadyHaveAccountLogin from "../user/AlreadyHaveAccountLogin";
import AdminDashboard from "../admin/AdminDashboard";
import Cart from "../Cart";
import { FaCartShopping } from "react-icons/fa6";
import logo2 from "./images/logo2.png";

import { cartListState } from "../../state";

const Navbar = () => {
  const navigate = useNavigate();

  const cartData = useRecoilValue(cartListState);

  return (
    <div>
      <nav className=" bg-[#e9dfdf] pr-5 flex justify-between text-xl items-center w-full">
        <div className="left">
          <img
            src={logo2}
            className="w-[150px] rounded-full h-[100px] ml-[30px]"
            alt=""
          />
        </div>
        <div className="center gap-5 flex text-blue-800 font-light text-[25px]">
          <span className="tracking-[20px] font-normal">Menu</span>
        </div>
        <div className="right gap-5 flex items-center">
          <div className="bg-slate-300 rounded-md">
            <button
              onClick={() => navigate("/cart")}
              className="flex items-center gap-4 p-3"
            >
              <FaCartShopping className="text-2xl" />
              <h2>{cartData.length}</h2>
            </button>
          </div>
          <Link to="/User-Register" className="text-blue-400 relative">
            <button className="bg-yellow-400 p-3 rounded-xl">User Login</button>
          </Link>
          <Link
            to="/Admin-Registration-Page"
            className="text-blue-400 relative"
          >
            <button className="bg-yellow-400 p-3 rounded-xl ">
              Admin Login
            </button>
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/cart" Component={Cart} />
        <Route path="/User-Register" Component={UserRegister} />
        <Route path="/UserDashboard" Component={UserDashboard} />
        <Route
          path="/Admin-Registration-Page"
          Component={AdminRegistrationPage}
        />
        <Route
          path="/AlreadyHaveAccountLogin"
          Component={AlreadyHaveAccountLogin}
        />
        <Route path="/AdminDashboard" Component={AdminDashboard} />
      </Routes>
    </div>
  );
};

export default Navbar;
