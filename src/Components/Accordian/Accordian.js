import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../Redux/Slices/cartSlice";

const Section = ({ title, text, visible, setIsVisible, sectionName }) => {
  //   const [isVisible, setIsVisible] = useState(false);
  console.log(setIsVisible);

  return (
    <div className=" border-2 border-black w-full h-auto">
      <h1 className="font-bold text-xl">{title}</h1>
      {visible ? (
        <>
          <span
            className="cursor-pointer border-2 bg-yellow-400 w-auto h-auto"
            onClick={() => {
              return setIsVisible(false);
            }}
          >
            Hide
          </span>
          <p className="text-lg">{text}</p>
        </>
      ) : (
        <>
          <span
            className="cursor-pointer border-2 bg-yellow-400 w-auto h-auto"
            onClick={() => {
              return setIsVisible(true);
            }}
          >
            Show
          </span>
        </>
      )}
    </div>
  );
};

const Accordian = () => {
  const [isVisible, setIsVisible] = useState("about");
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleDispatch = () => {
    dispatch(addItem("grapes"));
  };

  return (
    <div>
      <div>count -{cartItems.length}</div>
      <button onClick={handleDispatch}> click</button>
      <Section
        title={"About section"}
        text={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        visible={isVisible === "about"}
        setIsVisible={() => setIsVisible(isVisible === "about" ? "" : "about")}
        sectionName={"about"}
      />
      <Section
        title={"Profile section"}
        text={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        visible={isVisible === "profile"}
        setIsVisible={() =>
          setIsVisible(isVisible === "profile" ? "" : "profile")
        }
        sectionName={"profile"}
      />
      <Section
        title={"Contact section"}
        text={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        visible={isVisible === "contact"}
        setIsVisible={() =>
          setIsVisible(isVisible === "contact" ? "" : "contact")
        }
        sectionName={"contact"}
      />
    </div>
  );
};

export default Accordian;
