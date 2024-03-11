import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      let productsData = [];
      const responses = await fetch("https://dummyjson.com/products");
      if (responses) {
        const data = await responses.json();
        productsData = data.products;
        console.log(data, productsData, "data test");
      }
      return productsData;
    } catch (error) {
      console.log(error);
    }
  }
);
