import React, { useState } from "react";
import { toast } from "react-toastify";

const UserRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const notify = () => toast("Registration successful. Please login");

  return (
    <>
      <div className="h-[100vh] w-full flex justify-center items-center p-5">
        <div className="w-[400px] h-[500px] bg-slate-900 text-center rounded-md mt-10">
          <h1 className="p-2 text-3xl text-white">User Register</h1>
          <div className="flex text-left flex-col p-5 gap-2 text-black">
            <label className="text-white">Name</label>
            <input
              type="text"
              className="p-1 rounded-md"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <br />
            <label className="text-white">Email</label>
            <input
              type="email"
              className="p-1 rounded-md"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
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
                window.localStorage.setItem(
                  "activeUser",
                  JSON.stringify({
                    name,
                    email,
                    password,
                  })
                );

                setName("");
                setEmail("");
                setPassword("");

                notify();
              }}
            >
              Submit
            </button>
            <br />
            <a href="/AlreadyHaveAccountLogin" className="text-blue-500">
              Already Have an Account
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserRegister;
