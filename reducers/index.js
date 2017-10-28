import { combineReducers } from 'redux';
import game from './game';
import questions from './questions';

const reducers = combineReducers({
  game,
  questions,
});

export default reducers;
