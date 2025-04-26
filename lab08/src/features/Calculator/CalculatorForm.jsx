// src/features/Calculator/CalculatorForm.jsx
import { useDispatch, useSelector } from 'react-redux';
import { updateInput, calculateResult } from './calculatorSlice';

export default function CalculatorForm() {
  const dispatch = useDispatch();
  const { height, weight, bmi } = useSelector((state) => state.calculator);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateInput({ name, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(calculateResult());
  };

  return (
    <div style={{ border: '1px solid purple', padding: '1rem', margin: '1rem' }}>
      <h2>📐 Tính BMI</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Chiều cao (cm):</label>
          <input
            type="number"
            name="height"
            value={height}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Cân nặng (kg):</label>
          <input
            type="number"
            name="weight"
            value={weight}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Tính BMI</button>
      </form>

      {bmi && <p>Chỉ số BMI của bạn là: {bmi}</p>}
    </div>
  );
}
