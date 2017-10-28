import { call, put, spawn, takeLatest } from 'redux-saga/effects';
import * as types from '../../../actions/actionTypes';
import { fetchFailed, fetchSucceeded } from '../../../actions/questions';
import { fetch as fetchApi } from '../../../api/questions';

const fetchSent = function* fetchSent() {
  try {
    const questions = yield call(fetchApi);
    yield put(fetchSucceeded({ questions }));
  } catch (e) {
    yield put(fetchFailed({ error: e.message }));
  }
};

const fetchSentSaga = function* fetchSentSaga() {
  yield takeLatest(types.QUESTIONS_FETCH_SENT, fetchSent);
};

const fetchSaga = function* fetchSaga() {
  yield spawn(fetchSentSaga);
};

export default fetchSaga;
