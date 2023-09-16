import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../Slices/cartSlice";
import hamburgerMenuSlice from "../Slices/hamburgerMenuSlice";
import wishListSlice from "../Slices/wishListSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    hamburger: hamburgerMenuSlice,
    wishList: wishListSlice,
  },
});

export default store;
