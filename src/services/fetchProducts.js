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
      }
      return productsData;
    } catch (error) {
      console.log(error);
    }
  }
);
