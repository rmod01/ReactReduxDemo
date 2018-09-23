//This is a root  Reducer;
import {combineReducers} from 'redux';
import TeamMembers from './TeamMemberReducer';
import ProjectCodes from './ProjectCodeReducer';

const rootReducer = combineReducers({
  TeamMembers: TeamMembers,
  ProjectCodes: ProjectCodes
  }
);

export default rootReducer;
