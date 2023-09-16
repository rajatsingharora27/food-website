import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
  name: "wishList",
  initialState: {
    userWishList: [],
  },

  reducers: {
    addWishListProduct: (state, action) => {
      console.log(action.payload);
      state.userWishList.push(action.payload);
    },

    removeProductFromWishList: (state, action) => {
      const productId = action.payload.id;
      state.userWishList = state.userWishList.filter(
        (ele) => ele.id !== productId
      );
    },
  },
});

export const { addWishListProduct, removeProductFromWishList } =
  wishListSlice.actions;

export default wishListSlice.reducer;
