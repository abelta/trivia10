import { combineReducers } from 'redux';
import fetch from './fetch';

const questionsReducer = combineReducers({
  fetch,
});

export default questionsReducer;
