/* eslint no-shadow: 0 */
import { expectSaga } from 'redux-saga-test-plan';
import {
  fetchSent as fetchSentAction,
  fetchSucceeded as fetchSucceededAction,
  fetchFailed as fetchFailedAction,
} from '../../../actions/questions';
import { fetchSent, fetchSentSaga } from './fetch';

describe('fetchSentSaga', () => {
  const fetchSentMock = expectSaga(fetchSentSaga);

  it('receives QUESTIONS_FETCH_SENT', () => {
    fetchSentMock
      .put(fetchSentAction());
  });

  it('forks to fetchSent', () => {
    fetchSentMock
      .fork(fetchSent);
  });

  it('ends', () => {
    fetchSentMock
      .run();
  });
});

describe('fetchSent', () => {
  describe('when it fails', () => {
    fetch.mockResponse({ status: 400 });
    const error = 'error';
    const fetchSentMock = expectSaga(fetchSent, fetchSentAction());

    it('dispatches a failed action', () => {
      fetchSentMock
        .put(fetchFailedAction({ error }));
    });

    it('ends', () => {
      fetchSentMock
        .run();
    });

    describe('when it succeeds', () => {
      const questions = ['what', 'when', 'how'];
      fetch.mockResponse(JSON.stringify(questions));
      const fetchSentMock = expectSaga(fetchSent, fetchSentAction());

      it('dispatches a success action', () => {
        fetchSentMock
          .put(fetchSucceededAction({ questions }));
      });

      it('ends', () => {
        fetchSentMock
          .run();
      });
    });
  });
});
