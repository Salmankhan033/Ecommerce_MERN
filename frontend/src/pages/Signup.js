import React from "react";
import loginImg from "../assest/login-animation.gif";
const Signup = () => {
  return (
    <div className="p-3 md:p-4">
      <div className=" w-80 bg-white mx-w-sm m-auto items-center flex-col">
        <div className="w-16 rounded-full drop-shadow-dm shadow-md overflow-hidden">
          <img src={loginImg} className="w-full" />
        </div>
        {/* <h1 className="text-center text-2xl font-bold">Sign Up</h1> */}
        <form className="py-2">
          <label htmlFor="firstName">First Name</label>
          <input
            type={"text"}
            id="firstName"
            name="firstName"
            className="w-full bg-slate-200 px-2 py-1 rounded mt-1 mx-3"
          />
          <label htmlFor="firstName">Last Name</label>
          <input
            type={"text"}
            id="lasttName"
            name="lastName"
            className="w-full bg-slate-200 px-2 py-1 rounded mt-1"
          />
        </form>
      </div>
    </div>
  );
};

export default Signup;
