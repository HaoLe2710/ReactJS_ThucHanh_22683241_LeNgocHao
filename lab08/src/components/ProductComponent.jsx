import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../features/Product/productSlice';

export default function ProductComponent() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.product.products);

  const handleAddProduct = () => {
    dispatch(addProduct({ id: 3, name: 'Sản phẩm C', price: 200 }));
  };

  return (
    <div>
      <h2>Sản phẩm</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - {product.price}$
          </li>
        ))}
      </ul>
      <button onClick={handleAddProduct}>Thêm sản phẩm mới</button>
    </div>
  );
}
