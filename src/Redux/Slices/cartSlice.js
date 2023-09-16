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
      console.log(value);
      if (value - 1 > 0) {
        state.cartPageItems[index].quantity = value - 1;
      } else {
        state.cartPageItems.map((ele) => {
          console.log(ele);
        });
      }
    },
    increaeItemFromCartPage: (state, action) => {
      const { index, value } = action.payload;
      state.cartPageItems[index].quantity = value + 1;
      // state.totalPrice = totalUpdate(state.cartPageItems);
    },
    removeItemFromCart: (state, action) => {
      state.cartPageItems = state.cartPageItems.filter(
        (ele) => ele.id !== action.payload
      );
    },
    updateTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
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
  updateTotalPrice,
} = cartSlice.actions;

export default cartSlice.reducer;
