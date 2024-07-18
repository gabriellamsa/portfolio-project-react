import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
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
    },
    toggleItemCompletion: (state, action) => {
      const item = state.list.find(item => item.id === action.payload);
      if (item) {
        item.completed = !item.completed;
      }
    },
  },
});

export const { addItem, removeItem, toggleItemCompletion } = bucketListSlice.actions;
export default bucketListSlice.reducer;
