// src/features/ShoppingCart/ShoppingCart.jsx
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, updateQuantity } from './cartSlice';

const sampleProduct = { id: 1, name: 'Sản phẩm A', price: 100000 };

export default function ShoppingCart() {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div style={{ border: '1px solid green', padding: '1rem', margin: '1rem' }}>
      <h2>📦 Giỏ hàng</h2>
      <button onClick={() => dispatch(addItem(sampleProduct))}>Thêm sản phẩm A</button>

      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - {item.price}₫ x
            <input
              type="number"
              value={item.quantity}
              min="1"
              onChange={(e) =>
                dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))
              }
              style={{ width: '50px', margin: '0 5px' }}
            />
            <button onClick={() => dispatch(removeItem(item.id))}>Xoá</button>
          </li>
        ))}
      </ul>

      <p><strong>Tổng số lượng:</strong> {totalQuantity}</p>
      <p><strong>Tổng tiền:</strong> {totalPrice.toLocaleString()}₫</p>
    </div>
  );
}
