// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/CounterApp/counterSlice';
import todoReducer from '../features/TodoApp/todoSlice';
import themeReducer from '../features/ThemeToggle/themeSlice';
import cartReducer from '../features/ShoppingCart/cartSlice';
import authReducer from '../features/Auth/authSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer, 
    todos: todoReducer ,
    theme: themeReducer,
    cart: cartReducer,
    auth: authReducer
  },
});

export default store;
