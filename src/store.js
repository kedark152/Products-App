import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./reducers/productsSlice";

const store = configureStore({
  reducer: {
    products: productsSlice,
  },
});

export default store;
