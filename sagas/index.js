import { spawn } from 'redux-saga/effects';
import questions from './questions';

const sagas = function* sagas() {
  yield spawn(questions);
};

export default sagas;
