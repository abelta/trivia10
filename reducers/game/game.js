import * as types from '../../actions/actionTypes';

const stateInit = {
  score: 0,
  round: 0,
};

const gameReducer = (state = stateInit, action) => {
  switch (action.type) {
    case types.ANSWER_RIGHT: {
      const score = state.score + 1;
      const round = state.round + 1;
      return { ...state, score, round };
    }
    case types.ANSWER_WRONG: {
      const round = state.round + 1;
      return { ...state, round };
    }
    case types.GAME_RESETTED: return stateInit;
    default: return state;
  }
};

export default gameReducer;
