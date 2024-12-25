import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  selectedItems: 0,
  totalPrice: 0,
  tax: 0,
  taxRate: 0.05,
  grandTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isExist = state.products.find(
        (product) => product._id === action.payload._id
      );

      if (!isExist) {
        state.products.push({ ...action.payload, quantity: 1 });
      } else {
        alert("Product already exists in the cart");
      }

      state.selectedItems = setSelectedItems(state);
      state.totalPrice = setTotalPrice(state);
    },
  },
});

// utility functions
export const setSelectedItems = (state) =>
  state.products.reduce((total, product) => {
    return Number(total + product.quantity);
  });

export const setTotalPrice = (state) =>
  state.products.reduce((total, product) => {
    return Number(total + product.price * product.quantity);
  });
