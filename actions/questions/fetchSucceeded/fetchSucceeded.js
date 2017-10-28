import * as types from '../../actionTypes';

const fetchSucceeded = ({ questions }) => ({
  type: types.QUESTIONS_FETCH_SUCCEEDED,
  payload: { questions },
});

export default fetchSucceeded;
