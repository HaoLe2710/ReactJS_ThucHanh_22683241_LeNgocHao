// src/features/Calculator/calculatorSlice.js
import { createSlice } from '@reduxjs/toolkit';

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: {
    height: 0,  // Chiều cao (cm)
    weight: 0,  // Cân nặng (kg)
    bmi: null,  // Kết quả BMI
  },
  reducers: {
    updateInput: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    calculateResult: (state) => {
      const bmi = state.weight / ((state.height / 100) ** 2);
      state.bmi = bmi.toFixed(2);
    },
  },
});

export const { updateInput, calculateResult } = calculatorSlice.actions;
export default calculatorSlice.reducer;
