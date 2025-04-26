import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import AuthComponent from './AuthComponent';
import CartComponent from './CartComponent';
import ProductComponent from './ProductComponent';

export default function StoreCombinedComponent() {
  return (
    <Provider store={store}>
      <div>
        <h1>Redux Toolkit - Kết hợp nhiều slice và store</h1>
        <AuthComponent />
        <CartComponent />
        <ProductComponent />
      </div>
    </Provider>
  );
}
