import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../Slices/cartSlice";
import hamburgerMenuSlice from "../Slices/hamburgerMenuSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    hamburger: hamburgerMenuSlice,
  },
});

export default store;
