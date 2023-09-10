import { createSlice } from "@reduxjs/toolkit";

const totalUpdate = (cartArray) => {
  let value = 0;
  cartArray.forEach((ele) => {
    console.log(ele);
    value = ele.price * ele.quantity;
  });
  return value;
};

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
      console.log(state.totalPrice);
    },

    //Cart Page action functions
    removeItemFromCartPage: (state, action) => {
      const { index, value } = action.payload;
      console.log(value);
      if (value === 0) {
        console.log(value);
        state.cartPageItems = state.cartPageItems.filter((item) => {
          if (item.quantity > 0) {
            console.log(item);
            return item;
          }
        });
      }
      if (value > 0) {
        state.cartPageItems[index].quantity = value - 1;
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
