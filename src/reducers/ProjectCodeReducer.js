import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function ProjectCodeReducer(state = initialState.projectcodes, action){
switch (action.type) {
  case types.LOAD_PROJECTCODES_SUCCESS:
        return action.projectcodes;

  default:
    return state;
  }
}
