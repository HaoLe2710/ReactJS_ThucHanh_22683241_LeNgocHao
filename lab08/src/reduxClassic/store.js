import { createStore } from 'redux';
import counterReducer from './reduxClassic/reducers/counterReducer';

const store = createStore(counterReducer);

export default store;
