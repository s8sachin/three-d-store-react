import { TD_OBJECTS } from '../actions/types';

const INITIAL_STATE = {
  tdObjects: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case TD_OBJECTS:
    return { ...state, tdObjects: action.payload };
  default:
    return state;
  }
};
