import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: []
};

const bucketListSlice = createSlice({
  name: 'bucketList',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.list.push(action.payload);
    },
    removeItem: (state, action) => {
      state.list = state.list.filter(item => item.id !== action.payload);
    }
  }
});

export const { addItem, removeItem } = bucketListSlice.actions;
export default bucketListSlice.reducer;
