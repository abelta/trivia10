import * as types from '../../actions/actionTypes';

const stateInit = {
  points: 0,
  round: 0,
};

const gameReducer = (state = stateInit, action) => {
  switch (action.type) {
    case types.GAME_RESETTED: return stateInit;
    default: return state;
  }
};

export default gameReducer;
