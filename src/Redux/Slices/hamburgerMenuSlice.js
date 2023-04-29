import { createSlice } from "@reduxjs/toolkit";

const hamBurgerMenuSlice = createSlice({
  name: "hamburger",
  initialState: {
    isOpen: false,
  },
  reducers: {
    changeState: (state, action) => {
      state.isOpen = !action.payload;
    },
  },
});

export const { changeState } = hamBurgerMenuSlice.actions;

export default hamBurgerMenuSlice.reducer;
