// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/CounterApp/counterSlice';
import todoReducer from '../features/TodoApp/todoSlice';
import themeReducer from '../features/ThemeToggle/themeSlice';
import cartReducer from '../features/ShoppingCart/cartSlice';
import authReducer from '../features/Auth/authSlice';
import usersReducer from '../features/Users/usersSlice';
import counterReducerAdvance from '../features/Counter/counterSlice';
import calculatorReducer from '../features/Calculator/calculatorSlice';
import eventReducer from '../features/EventManagement/eventSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer, 
    todos: todoReducer ,
    theme: themeReducer,
    cart: cartReducer,
    auth: authReducer,
    users: usersReducer,
    counter: counterReducerAdvance,
    calculator: calculatorReducer,
    event: eventReducer,
  },
});

export default store;
