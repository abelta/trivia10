import * as types from '../../actionTypes';

const fetchFailed = ({ error }) => ({
  type: types.FETCH_FAILED,
  payload: { error },
});

export default fetchFailed;
