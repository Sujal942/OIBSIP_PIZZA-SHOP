import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AlreadyHaveAccountLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <>
        <div className="h-[100vh] w-full flex justify-center items-center p-5">
          <div className="w-[400px] h-[400px] bg-slate-900 text-center rounded-md mt-10">
            <h1 className="p-5 text-3xl text-white">Have Account Login</h1>
            <div className="flex text-left flex-col p-5 gap-2 text-black">
              <label className="text-white">Email</label>
              <input
                type="text"
                className="p-1 rounded-md"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <br />
              <br />
              <label className="text-white">Password</label>
              <input
                type="password"
                className="p-1 rounded-md"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <br />
              <button
                className="text-white bg-green-700 p-2 rounded-md  w-fit"
                onClick={() => {
                  const activeUser = window.localStorage.getItem("activeUser");

                  if (activeUser) {
                    const { email: savedEmail, password: savedPassword } =
                      JSON.parse(activeUser);

                    if (savedEmail === email && savedPassword === password) {
                      navigate("/UserDashboard");

                      toast("Login success!");
                    } else {
                      toast("Login failed!");
                    }
                  } else {
                    toast("Login failed!");
                  }
                }}
              >
                LOGIN
              </button>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default AlreadyHaveAccountLogin;
