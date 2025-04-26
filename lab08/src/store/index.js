// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/CounterApp/counterSlice';
import todoReducer from '../features/TodoApp/todoSlice';
import themeReducer from '../features/ThemeToggle/themeSlice';
import cartReducer from '../features/ShoppingCart/cartSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer, 
    todos: todoReducer ,
    theme: themeReducer,
    cart: cartReducer
  },
});

export default store;
