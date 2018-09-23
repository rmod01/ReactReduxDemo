import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as TeamMemberActions from '../../actions/TeamMemberActions';
import TeamMemberForm from './TeamMemberForm';
import toastr from 'toastr';

class ManageTeamMemberPage extends React.Component {
  constructor(props, context){
    super(props, context);

    this.state = {
      teammember: Object.assign({}, this.props.teammember),
      errors: {},
      saving: false
    };

  this.updateTeamMemberState = this.updateTeamMemberState.bind(this);
  this.saveTeamMember = this.saveTeamMember.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.teammember.id != nextProps.teammember.id){
      this.setState({teammember: Object.assign({},nextProps.teammember)});
    }
  }

updateTeamMemberState(event){
  const field = event.target.name;
  let teammember = Object.assign({},this.state.teammember);
  teammember[field] = event.target.value;
  return this.setState({teammember: teammember});
}

saveTeamMember(event){
  event.preventDefault();
  this.setState({saving: true});
  this.props.actions.saveTeamMember(this.state.teammember)
  .then(() => this.redirect())
  .catch(error => {
    toastr.error(error);
    this.setState({saving: false});
  });
}

redirect(){
  this.setState({saving: false});
  toastr.success('Team Member SAVED !');
  this.context.router.push('/teammembers');
}

  render() {
    return(
        <TeamMemberForm
          teammember={this.state.teammember}
          onChange={this.updateTeamMemberState}
          onSave={this.saveTeamMember}
          errors={this.state.errors}
          allProjectCodes={this.props.projectcodes}
          saving={this.state.saving}
        />
    );
  }
}

ManageTeamMemberPage.propTypes = {
  teammember: PropTypes.object.isRequired,
  projectcodes: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
  };

//Pull in the React Routrer context so router is available on this.context.router.
ManageTeamMemberPage.contextTypes = {
  router: PropTypes.Object
};

function getTeamMemberById(teammembers, id){
  const teammember = teammembers.filter(teammember => teammember.id == id);
  if(teammember.length) return teammember[0]; //since filter return an array, have to grab the first element of the array.
  return null;
}

function mapStateToProps(state, ownProps){
const teammemberId = ownProps.params.id; //from the path '/teammember/:id'

let teammember = {id: '', title: '', watchHref: '', ProjectCodeId: '', length: '', category: '' };

if(teammemberId && state.TeamMembers.length > 0){
  teammember = getTeamMemberById(state.TeamMembers, teammemberId);
}

  const projectcodesFormattedForDropdown = state.ProjectCodes.map(projectcode => {
    return{
      value: projectcode.id,
      text: projectcode.firstName + ' ' + projectcode.lastName
    };
  });

  return{
    teammember: teammember,
    projectcodes: projectcodesFormattedForDropdown
  };
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(TeamMemberActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageTeamMemberPage);
