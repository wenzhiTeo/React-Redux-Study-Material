import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemList: [],
    totalQty: 0,
    showCart: false,
    isUpdated: false,
  },
  reducers: {
    addToCart(state, action) {
      state.isUpdated = true;
      const newItem = action.payload;
      const existingItem = state.itemList.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.itemList.push({
          id: newItem.id,
          name: newItem.name,
          quantity: 1,
          price: newItem.price,
          totalPrice: newItem.price,
        });
        state.totalQty++;
      }
    },
    removeFromCart(state, action) {
      state.isUpdated = true;
      const id = action.payload;
      const existingItem = state.itemList.find((item) => item.id === id);

      if (existingItem.quantity === 1) {
        state.itemList = state.itemList.filter((item) => item.id !== id);
        state.totalQty--;
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
    setShowCart(state) {
      state.showCart = !state.showCart;
    },
    replaceData(state, action) {
      state.itemList = action.payload.itemList;
      state.totalQty = action.payload.totalQty;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
