import { configureStore } from '@reduxjs/toolkit';
import bucketListReducer from '../features/bucketListSlice';
import userReducer from '../user/userSlice';

export const store = configureStore({
  reducer: {
    bucketList: bucketListReducer,
    user: userReducer
  },
});

export default store;