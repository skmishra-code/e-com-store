import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const { data } = await axios.get("https://dummyjson.com/products?limit=100");
    return data.products;
  }
);

const initialState = {
  loading: false,
  products: [],
  error: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(getProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default productSlice.reducer;
