import { combineReducers } from 'redux';
import game from './game';
import network from './network';
import questions from './questions';

const reducers = combineReducers({
  game,
  network,
  questions,
});

export default reducers;
