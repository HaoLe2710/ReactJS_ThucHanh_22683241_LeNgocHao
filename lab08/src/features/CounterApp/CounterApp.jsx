// src/features/CounterApp/CounterApp.jsx
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './counterSlice';

export default function CounterApp() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ border: '1px solid #888', padding: '1rem', margin: '1rem' }}>
      <h2>🧩 Counter App (Redux Toolkit)</h2>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())} style={{ marginLeft: '1rem' }}>-</button>
    </div>
  );
}
