// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/CounterApp/counterSlice';
import todoReducer from '../features/TodoApp/todoSlice';
import themeReducer from '../features/ThemeToggle/themeSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer, 
    todos: todoReducer ,
    theme: themeReducer 
  },
});

export default store;
