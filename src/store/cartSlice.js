import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: 0, 
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state) => {
      state.items += 1; 
    },
  },
});

export const { addItemToCart } = cartSlice.actions; 

export default cartSlice.reducer;
