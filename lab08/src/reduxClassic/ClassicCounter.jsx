import { useDispatch, useSelector, Provider } from 'react-redux';
import { increment, decrement } from './actions/counterActions';
import classicStore from './store';

function ClassicCounterComponent() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div style={{ border: '1px solid red', padding: '1rem', margin: '1rem' }}>
      <h2>Redux Classic</h2>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default function ClassicCounter() {
  return (
    <Provider store={classicStore}>
      <ClassicCounterComponent />
    </Provider>
  );
}
