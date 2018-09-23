import * as types from './actionTypes';
import ProjectCodeApi from '../api/mockProjectCodeApi';

export function loadProjectCodesSuccess(projectcodes){
  debugger;
  return {type: types.LOAD_PROJECTCODES_SUCCESS, projectcodes};
}

export function loadProjectCodes(){
          return function(dispatch){
              return ProjectCodeApi.getAllProjectCodes().then(projectcodes => {                                    
                dispatch(loadProjectCodesSuccess(projectcodes));
                }).catch (error => {throw(error);
                });
          };
}
