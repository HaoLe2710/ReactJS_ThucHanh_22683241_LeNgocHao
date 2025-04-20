import { useDispatch, useSelector, Provider } from 'react-redux';
import { increment, decrement } from './features/counterSlice';
import toolkitStore from './store';

function ToolkitCounterComponent() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div style={{ border: '1px solid blue', padding: '1rem', margin: '1rem' }}>
      <h2>Redux Toolkit</h2>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default function ToolkitCounter() {
  return (
    <Provider store={toolkitStore}>
      <ToolkitCounterComponent />
    </Provider>
  );
}
