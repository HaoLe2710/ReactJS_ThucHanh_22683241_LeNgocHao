import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../features/ShoppingCart/cartSlice';

export default function CartComponent() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);

  const handleAddItem = (product) => {
    dispatch(addItem({ ...product, quantity: 1 }));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div>
      <h2>Giỏ hàng</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - {item.quantity} x {item.price}$
            <button onClick={() => handleRemoveItem(item.id)}>Xoá</button>
          </li>
        ))}
      </ul>
      <button onClick={() => handleAddItem({ id: 3, name: 'Sản phẩm C', price: 200 })}>
        Thêm sản phẩm vào giỏ
      </button>
    </div>
  );
}
