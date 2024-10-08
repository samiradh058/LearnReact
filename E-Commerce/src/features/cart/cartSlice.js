import { createSlice } from "@reduxjs/toolkit";

const initialState = { cart: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    clearCart(state) {
      state.cart = [];
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.itemId !== action.payload);
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.itemId === action.payload);

      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      if (item.quantity === 0) {
        state.cart = state.cart.filter(
          (item) => item.itemId !== action.payload,
        );
      }
    },

    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.itemId === action.payload);

      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
  },
});

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const {
  addItem,
  clearCart,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions;

export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.itemId === id)?.quantity ?? 0;
