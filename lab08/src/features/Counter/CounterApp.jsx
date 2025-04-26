// src/features/Counter/CounterApp.jsx
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, incrementByAmount } from './counterSlice';
import { useState } from 'react';

export default function CounterApp() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.value);
  const [step, setStep] = useState(1);

  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(step));
  };

  return (
    <div style={{ border: '1px solid green', padding: '1rem', margin: '1rem' }}>
      <h2>🧮 Counter Nâng Cao</h2>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Tăng</button>
      <button onClick={() => dispatch(decrement())}>Giảm</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <div>
        <input
          type="number"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <button onClick={handleIncrementByAmount}>Tăng theo Step</button>
      </div>
    </div>
  );
}
