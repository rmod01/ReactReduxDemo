import * as types from './actionTypes';
import TeamMemberApi from '../api/mockTeamMemberApi';

export function loadTeamMembersSuccess(teammembers){
  debugger;
  return {type: types.LOAD_TEAMMEMBERS_SUCCESS, teammembers};
}

export function createTeamMemberSuccess(teammember){
  debugger;
  return {type: types.CREATE_TEAMMEMBER_SUCCESS, teammember};
}

export function updateTeamMemberSuccess(teammember){
  debugger;
  return {type: types.UPDATE_TEAMMEMBER_SUCCESS, teammember};
}

export function loadTeamMembers(){
  debugger;
          return function(dispatch){
              return TeamMemberApi.getAllTeamMembers().then(teammembers => {
                dispatch(loadTeamMembersSuccess(teammembers));
                }).catch (error => {throw(error);
                });
          };
}

export function saveTeamMember(teammember){
  debugger;
          return function(dispatch){
              return TeamMemberApi.saveTeamMember(teammember).then(savedTeamMember => {
                teammember.id ? dispatch(updateTeamMemberSuccess(savedTeamMember)) :
                  dispatch(createTeamMemberSuccess(savedTeamMember));
                }).catch (error => {throw(error);
                });
          };
}
