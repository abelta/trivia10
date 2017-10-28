import { combineReducers } from 'redux';
import questions from './questions';

const networkReducer = combineReducers({
  questions,
});

export default networkReducer;
