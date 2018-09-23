import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function TeamMemberReducer(state = initialState.teammembers, action){
switch (action.type) {
  case types.LOAD_TEAMMEMBERS_SUCCESS:
        return action.teammembers;

  case types.CREATE_TEAMMEMBER_SUCCESS:
        return [
          ...state,
          Object.assign({},action.teammember)
        ];

  case types.UPDATE_TEAMMEMBER_SUCCESS:
        return [
          ...state.filter(teammember => teammember.id !== action.teammember.id),
          Object.assign({},action.teammember)
        ];

  default:
    return state;
  }
}
