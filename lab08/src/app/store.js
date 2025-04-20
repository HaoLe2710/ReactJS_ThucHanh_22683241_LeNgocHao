import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../reduxToolkit/features/counterSlice';

export const store = configureStore({
  reducer: counterReducer
});
