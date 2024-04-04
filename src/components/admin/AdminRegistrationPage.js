import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminRegistrationPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("admin");

  const handleLogin = () => {
    if (email === "admin@gmail.com" && password === "admin") {
      navigate("/AdminDashboard");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <>
      <div className="h-[100vh] w-full flex justify-center items-center p-5">
        <div className="w-[400px] h-[400px] bg-slate-900 text-center rounded-md">
          <h1 className="p-5 text-3xl text-white">Admin Login</h1>
          <div className="flex text-left flex-col p-5 gap-2 text-black">
            <label className="text-white">Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-1 rounded-md"
            />
            <br />
            <br />
            <label className="text-white">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-1 rounded-md"
            />
            <br />
            <button
              onClick={handleLogin}
              className="text-white bg-green-700 p-2 rounded-md w-fit"
            >
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminRegistrationPage;
