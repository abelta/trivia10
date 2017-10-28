import * as types from '../../../../actions/actionTypes';

const stateInit = {
  error: false,
  loading: false,
};

const fetchReducer = (state = stateInit, action) => {
  switch (action.type) {
    case types.QUESTIONS_FETCH_FAILED: {
      const { error } = action.payload;
      return { error, loading: false };
    }
    case types.QUESTIONS_FETCH_SENT: {
      return { error: false, loading: true };
    }
    case types.QUESTIONS_FETCH_SUCCEEDED: {
      return { error: false, loading: false };
    }
    default: return state;
  }
};

export default fetchReducer;
