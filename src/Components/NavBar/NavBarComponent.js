import React, { useState } from "react";
import { FaAlignJustify, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleHamburgerClick = () => {
    setNav(!nav);
  };

  return (
    <div className=" flex justify-between pt-3 bg-green-300">
      {nav ? (
        <div>
          <img
            src="/images/logo.png"
            alt="Tuileries "
            className="w-56 h-10 invisible lg:visible"
          />
        </div>
      ) : (
        <div className="">
          <img src="/images/logo.png" alt="Tuileries " className="w-56 h-10" />
        </div>
      )}

      <div className="p-4">
        <ul className="hidden md:flex space-x-4 uppercase ">
          <li className="cursor-pointer hover:underline ">Home</li>
          <li className="cursor-pointer hover:underline decoration-2">
            About Us
          </li>
          <li className="cursor-pointer hover:underline decoration-2">Cakes</li>
          <li className="cursor-pointer hover:underline decoration-2">
            Gift Hampers
          </li>
          <li className="cursor-pointer hover:underline decoration-2">
            Savory
          </li>
          <li className="cursor-pointer hover:underline decoration-2">
            Pastory
          </li>
          <li className="cursor-pointer hover:underline decoration-2">
            Contact Us
          </li>
        </ul>
      </div>

      {/* Mobile Devices */}
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[20%] h-full bg-green-300 ease-in-out duration-500  md:hidden "
            : "fixed left-[-100%] ease-in-out duration-500"
        }
      >
        <img
          src="/images/logo.png"
          alt="Tuileries "
          className={nav ? "w-56 h-10 md:w-[10%]" : "hidden"}
        />
        <ul className="pt-24 uppercase">
          <li className="p-2 border-b border-gray-200 ">Home</li>
          <li className="p-2 border-b border-gray-200 ">About Us</li>
          <li className="p-2 border-b border-gray-200 ">Cakes</li>
          <li className="p-2 border-b border-gray-200 ">Gift Hampers</li>
          <li className="p-2 border-b border-gray-200 ">Savory</li>
          <li className="p-2 border-b border-gray-200 ">Pastory</li>
          <li className="p-2">Contact Us</li>
        </ul>
      </div>

      <div className="p-3  md:hidden " onClick={handleHamburgerClick}>
        {!nav ? (
          <div>
            <FaAlignJustify className="cursor-pointer " />
          </div>
        ) : (
          <div>
            <FaTimes className="cursor-pointer " />
          </div>
        )}
      </div>
      {/* <div className="border-4 border-pink-500 p-4">
        <ul className="list-none flex space-x-2 uppercase ">
          <li>search</li>
          <li>cart</li>
          <li>profile</li>
        </ul>
      </div> */}
    </div>
  );
};

export default Navbar;
