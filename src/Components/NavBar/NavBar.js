import React, { useState } from "react";
import { FaSearch, FaUserAlt, FaListUl, FaCartPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { changeState } from "../../Redux/Slices/hamburgerMenuSlice";
import "../../root.css";

// import SearchComponent from "../SearchComponent";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const navigate = useNavigate();

  // const [search, setSearch] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    dispatch(changeState(nav));
  };

  return (
    <>
      <div className="w-auto shadow-md h-[60px] flex justify-between items-center text-white bg-[var(--background-color)] z-10 px-7 md:w-screen">
        <Link to={"/home"}>
          <img
            src="/images/logo.png"
            alt="Tuileries "
            className="flex items-center cursor-pointer w-auto h-8 "
          />
        </Link>

        <ul className="hidden lg:flex px-4  ">
          <Link to={"/home"}>
            <li className="text-xl px-4 cursor-pointer hover:text-[var(--navBarHover-color)] hover:ease-in duration-100">
              Home
            </li>
          </Link>
          <Link to={"/about"}>
            <li className="text-xl px-4 cursor-pointer hover:text-[var(--navBarHover-color)] hover:ease-in duration-100 ">
              About Us
            </li>
          </Link>

          <Link to={"/cakes"}>
            <li className="text-xl px-4  cursor-pointer hover:text-[var(--navBarHover-color)] hover:ease-in duration-100">
              Cakes
            </li>
          </Link>
          <Link to={"/gift-hamper"}>
            <li className="text-xl px-4 cursor-pointer hover:text-[var(--navBarHover-color)] hover:ease-in duration-100 ">
              Gift Hampers
            </li>
          </Link>

          <Link to={"/savory"}>
            <li className="text-xl px-4 cursor-pointer hover:text-[var(--navBarHover-color)] hover:ease-in duration-100 ">
              Savory
            </li>
          </Link>

          <Link to={"/pastory"}>
            <li className="text-xl px-4 cursor-pointer hover:text-[var(--navBarHover-color)] hover:ease-in duration-100 ">
              Pastory
            </li>
          </Link>

          <Link to={"/contact"}>
            <li className="text-xl px-4 cursor-pointer hover:text-[var(--navBarHover-color)] hover:ease-in duration-100">
              Contact Us
            </li>
          </Link>
        </ul>
        <div className="hidden lg:flex justify-between  ">
          <FaSearch className="mx-4 cursor-pointer" />
          <FaUserAlt className="mx-4 cursor-pointer" />
          <FaCartPlus
            className="mx-4 cursor-pointer z-[1]"
            onClick={() => navigate("/cart")}
          />
          {cartItems.length > 0 ? (
            <span className="absolute top-2 right-0 py-0 px-1 text-[var(--navBarHover-color)] rounded-full text-[13px] align-top ml-[-10px] bg-[#ff0000c1] ">
              {cartItems.length}
            </span>
          ) : (
            ""
          )}
        </div>
        {/* HamBurger */}
        <div className="lg:hidden z-10">
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
              ? "overflow-y-hidden lg:hidden ease-in duration-300 w-full  absolute left-0 top-0 bottom-0 h-screen bg-[var(--background-color)] px-4 py-7 flex flex-col"
              : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
          }
        >
          <div>
            <ul className="h-full w-full text-center pt-12">
              <Link to={"/home"}>
                <li className="text-xl px-5  py-4 cursor-pointer hover:text-[var(--navBarHover-color)] hover:ease-in duration-100">
                  Home
                </li>
              </Link>
              <Link to={"/about"}>
                <li className="text-xl px-5  py-4 cursor-pointer hover:text-[var(--navBarHover-color)] hover:ease-in duration-100 ">
                  About Us
                </li>
              </Link>

              <Link to={"/cakes"}>
                <li className="text-xl px-5 py-4 cursor-pointer hover:text-[var(--navBarHover-color)] hover:ease-in duration-100">
                  Cakes
                </li>
              </Link>
              <Link to={"/gift-hamper"}>
                <li className="text-xl px-5 py-4  cursor-pointer hover:text-[var(--navBarHover-color)] hover:ease-in duration-100 ">
                  Gift Hampers
                </li>
              </Link>

              <Link to={"/savory"}>
                <li className="text-xl px-5 py-4 cursor-pointer hover:text-[var(--navBarHover-color)] hover:ease-in duration-100 ">
                  Savory
                </li>
              </Link>

              <Link to={"/pastory"}>
                <li className="text-xl px-5  py-4 cursor-pointer hover:text-[var(--navBarHover-color)] hover:ease-in duration-100 ">
                  Pastory
                </li>
              </Link>

              <Link to={"/contact"}>
                <li className="text-xl px-5 py-4 cursor-pointer hover:text-[var(--navBarHover-color)] hover:ease-in duration-100">
                  Contact Us
                </li>
              </Link>
            </ul>
          </div>

          <div className="flex justify-center pt-1 ">
            <FaSearch className="mx-4 text-black cursor-pointer " />
            <FaUserAlt className="mx-4 cursor-pointer" />
          </div>
        </div>
      </div>
      {/* {search ? <SearchComponent /> : ""} */}
    </>
  );
};
export default NavBar;
