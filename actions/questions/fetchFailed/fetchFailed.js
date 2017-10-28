import * as types from '../../actionTypes';

const fetchFailed = ({ error }) => ({
  type: types.QUESTIONS_FETCH_FAILED,
  payload: { error },
});

export default fetchFailed;
