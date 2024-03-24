import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.card.info.id === newItem.card.info.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
    },
    removeItemlast: (state) => {
      state.items.pop();
    },
    removeItemfirst: (state) => {
      state.items.shift();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
    updateItemQuantity: (state, action) => {
      const { itemId, quantity } = action.payload;
      const itemToUpdate = state.items.find(
        (item) => item.card.info.id === itemId
      );

      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

export const {
  addItem,
  removeItemlast,
  removeItemfirst,
  clearCart,
  updateItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
