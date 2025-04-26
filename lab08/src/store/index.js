// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/CounterApp/counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer, // ✅ đúng tên "counter"
  },
});

export default store;
