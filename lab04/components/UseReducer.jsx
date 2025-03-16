import React, { useReducer, useState } from "react";
import { Button } from "./Button";

const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return state + action.payload;
    case "SUBTRACT":
      return state - action.payload;
    case "MULTIPLY":
      return state * action.payload;
    case "DIVIDE":
      return action.payload !== 0 ? state / action.payload : state;
    default:
      return state;
  }
};

export default function Calculator() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState("");

  const handleOperation = (type) => {
    const value = parseFloat(input);
    if (!isNaN(value)) {
      dispatch({ type, payload: value });
    }
  };

  return (
    <div className="p-4 max-w-sm mx-auto bg-white shadow-lg rounded-xl text-center">
      <h1 className="text-xl font-bold mb-4">Calculator</h1>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-2 rounded w-full mb-4"
        placeholder="Enter a number"
      />
      <div className="flex justify-between mb-4">
        <Button onClick={() => handleOperation("ADD")} variant="outline">+</Button>
        <Button onClick={() => handleOperation("SUBTRACT")} variant="outline">-</Button>
        <Button onClick={() => handleOperation("MULTIPLY")} variant="outline">*</Button>
        <Button onClick={() => handleOperation("DIVIDE")} variant="outline">/</Button>
      </div>
      <div className="text-lg font-semibold">Result: {state}</div>
    </div>
  );
}
