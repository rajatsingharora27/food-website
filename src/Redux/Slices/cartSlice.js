import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    cartPageItems: [],
    totalPrice: 0,
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
    removeItem: (state, action) => {
      state.items.pop(action.payload);
    },

    addItemToCart: (state, action) => {
      //by default one Item is added to the cart
      const itemWithQuantity = { ...action.payload, quantity: 1 };
      state.totalPrice += itemWithQuantity.quantity * itemWithQuantity.price;
      state.cartPageItems.push(itemWithQuantity);
    },

    //Cart Page action functions
    removeItemFromCartPage: (state, action) => {
      const { index, value } = action.payload;
      if (value > 0) {
        state.cartPageItems[index].quantity = value - 1;
        // state.totalPrice -=
        //   state.cartPageItems[index].quantity *
        //   state.cartPageItems[index].price;
      }
      if (value === 0) {
        state.cartPageItems.filter((ele, idx) => idx !== index);
      }
    },

    increaeItemFromCartPage: (state, action) => {
      const { index, value } = action.payload;
      state.cartPageItems[index].quantity = value + 1;
      // state.totalPrice +=
      //   state.cartPageItems[index].quantity * state.cartPageItems[index].price;
    },
    removeItemFromCart: (state, action) => {
      state.cartPageItems.filter((ele) => ele.id !== action.payload);
    },
  },
});

export const {
  addItem,
  clearCart,
  removeItem,
  removeItemFromCartPage,
  increaeItemFromCartPage,
  removeItemFromCart,
  addItemToCart,
} = cartSlice.actions;

export default cartSlice.reducer;
