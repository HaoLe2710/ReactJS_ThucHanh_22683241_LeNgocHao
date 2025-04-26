// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/CounterApp/counterSlice';
import todoReducer from '../features/TodoApp/todoSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer, 
    todos: todoReducer 
  },
});

export default store;
