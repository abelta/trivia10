import { spawn } from 'redux-saga/effects';
import fetch from './fetch';

const questionsSagas = function* questionsSagas() {
  yield spawn(fetch);
};

export default questionsSagas;
