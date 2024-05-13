import React from "react";
import Logo from "../assets/BEGIZE.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="flex justify-between items-center gap-10 md:gap-20 px-20 sm:px-32 md:px-96 bg-slate-200">
        <img src={Logo} alt="" className="w-36 md:w-56" />
        <div className="cursor-pointer">
          <Link to="/"><p className="text-gray-400 hover:text-gray-600 duration-300 ease-in-out">Home</p></Link>
          <Link to="/add-queue"><p className="text-gray-400 hover:text-gray-600 duration-300 ease-in-out">Add Queue</p></Link>
          <Link to="/my-queue"><p className="text-gray-400 hover:text-gray-600 duration-300 ease-in-out">My Queue</p></Link>
          <Link to="/admin"><p className="text-gray-400 hover:text-gray-600 duration-300 ease-in-out">Admin</p></Link>
          <Link to="/login"><p className="text-gray-400 hover:text-gray-600 duration-300 ease-in-out">Login</p></Link>
          
        </div>
      </div>
      <div className="bg-slate-700 text-center text-white">
        <small className="">
          © 2024 Bereket Getachew. All rights reserved.
        </small>
      </div>
    </div>
  );
};

export default Footer;
