import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assest/logo.png";
import { FaRegUserCircle, FaShoppingCart } from "react-icons/fa";

function Headers() {
  const [showMenu, setShowMenu] = useState(false);
  const showHandler = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="fixed shadow-md w-full flex h-16 justify-between px-4 bg-white items-center">
      <Link to={""}>
        <div className=" h-12 flex w-full self-center items-center">
          <img src={logo} className="md:h-10 h-5" />
        </div>
      </Link>
      <div className="flex items-center gap-4 md:gap-7">
        <nav className="flex gap-2 md:gap-10 lg:text-2xl">
          <Link to={""}>Home</Link>
          <Link to={"menu"}>Menu</Link>
          <Link to={"about"}>About</Link>
          <Link to={"contact"}>Contact</Link>
        </nav>
        <div className="text-3xl text-slate-600 relative">
          <FaShoppingCart />
          <div className=" absolute -top-1 -right-1 bg-red-500 text-white text-sm  p-0 m-0 text-center rounded-full w-4 h-4">
            1
          </div>
        </div>
        <div
          className="text-2xl text-slate-600 cursor-pointer"
          onClick={showHandler}
        >
          <FaRegUserCircle />
          {showMenu && (
            <div className=" absolute right-2 bg-white py-2 px-2 shadow drop-shadow-md flex flex-col">
              <Link
                to="newProduct"
                className=" whitespace-nowrap cursor-pointer"
              >
                New Products
              </Link>
              <Link to="login" className=" whitespace-nowrap cursor-pointer">
                LogIn
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Headers;
// <div className="lg:flex md:block hidden lg:justify-start md:justify-end justify-center items-center lg:pl-[21rem] md:pl-6 pl-4 ">
