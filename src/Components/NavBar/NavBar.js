import React, { useState } from "react";
import {
  FaAlignJustify,
  FaTimes,
  FaSearch,
  FaUserAlt,
  FaListUl,
} from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full h-[60px] flex justify-between items-center text-white bg-[#acdccb] z-10 md:w-screen">
      <img
        src="/images/logo.png"
        alt="Tuileries "
        className="w-60 h-10 cursor-pointer "
      />
      <ul className="hidden sm:flex px-4">
        <li className="text-xl px-4 cursor-pointer hover:text-[#c7b299] hover:ease-in duration-100">
          Home
        </li>
        <li className="text-xl px-4 cursor-pointer hover:text-[#c7b299] hover:ease-in duration-100 ">
          About Us
        </li>
        <li className="text-xl px-4  cursor-pointer hover:text-[#c7b299] hover:ease-in duration-100">
          Cakes
        </li>
        <li className="text-xl px-4 cursor-pointer hover:text-[#c7b299] hover:ease-in duration-100 ">
          Gift Hampers
        </li>
        <li className="text-xl px-4 cursor-pointer hover:text-[#c7b299] hover:ease-in duration-100 ">
          Savory
        </li>
        <li className="text-xl px-4 cursor-pointer hover:text-[#c7b299] hover:ease-in duration-100 ">
          Pastory
        </li>
        <li className="text-xl px-4 cursor-pointer hover:text-[#c7b299] hover:ease-in duration-100">
          Contact Us
        </li>
      </ul>
      <div className="hidden md:flex justify-between ">
        <FaSearch className="mx-4 cursor-pointer" />
        <FaUserAlt className="mx-4 cursor-pointer" />
      </div>
      {/* HamBurger */}
      <div className="sm:hidden z-10">
        <FaListUl
          size={20}
          className="mr-4 cursor-pointer"
          onClick={handleNav}
        />
      </div>
      {/* Mobile View */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "overflow-y-hidden md:hidden ease-in duration-300 w-full absolute left-0 top-0 h-screen bg-[#acdccb]/90 px-4 py-7 flex flex-col"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
        }
      >
        <div>
          <ul className="h-full w-full text-center pt-12">
            <li className="text-2xl py-3 hover:text-[#c7b299] hover:ease-in duration-100 cursor-pointer">
              Home
            </li>
            <li className="text-2xl py-3  hover:text-[#c7b299] hover:ease-in duration-100 cursor-pointer">
              About Us
            </li>
            <li className="text-2xl py-3  hover:text-[#c7b299] hover:ease-in duration-100 cursor-pointer">
              Cakes
            </li>
            <li className="text-2xl py-3  hover:text-[#c7b299] hover:ease-in duration-100 cursor-pointer">
              Gift Hampers
            </li>
            <li className="text-2xl py-3  hover:text-[#c7b299] hover:ease-in duration-100 cursor-pointer">
              Savory
            </li>
            <li className="text-2xl py-3  hover:text-[#c7b299] hover:ease-in duration-100 cursor-pointer">
              Pastory
            </li>
            <li className="text-2xl py-3 hover:text-[#c7b299] hover:ease-in duration-100 cursor-pointer">
              Contact Us
            </li>
          </ul>
        </div>

        <div className="flex justify-center pt-1">
          <FaSearch className="mx-4 text-black cursor-pointer " />
          <FaUserAlt className="mx-4 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};
export default NavBar;
