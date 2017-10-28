import * as types from '../../actions/actionTypes';

const stateInit = [];

const questionsReducer = (state = stateInit, action) => {
  switch (action.type) {
    case types.GAME_RESETTED: {
      return stateInit;
    }
    case types.QUESTIONS_FETCH_SUCCEEDED: {
      const { questions } = action.payload;
      return questions;
    }
    default: return state;
  }
};

export default questionsReducer;
