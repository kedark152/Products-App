import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../services/fetchProducts";

const productSlice = createSlice({
  name: "products",
  initialState: { status: "loading", data: [], error: "" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "success";
        console.log(action.payload);
        state.data = action.payload;
      })
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = "loading";
        state.data = [];
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "error";
        state.error = "Unable to fetch the data";
        state.data = [];
      });
  },
});

export default productSlice.reducer;
