import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {},
    removeItemToCart: (state, action) => {},
    increaseQuantity: (state, action) => {},
    decreaseQuantity: (state, action) => {},
    resetCart: (state, action) => {},
  },
});

export const {
  addItemToCart,
  removeItemToCart,
  increaseQuantity,
  decreaseQuantity,
  resetCart,
} = cartSlice.actions;

export default cartSlice.reducer;
