import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {bindActionCreators} from 'redux';
import * as TeamMemberActions from '../../actions/TeamMemberActions';
import TeamMembersList from './TeamMembersList';

class TeamMembersPage extends React.Component {
  constructor(props, context){
    super(props, context);
    this.redirectToAddTeamMemberPage = this.redirectToAddTeamMemberPage.bind(this);
    }

TeamMemberRow(TeamMember, index){
  return <div key={index}>{TeamMember.title}</div>;
}

redirectToAddTeamMemberPage(){
  browserHistory.push('/teammember');
}

  render() {
          debugger;
    const {teammembers} = this.props;
    return(
      <div>
        <h1>Team Members</h1>
        <input type="submit"
        value="Add Team Member"
        className="btn btn-primary"
        onClick={this.redirectToAddTeamMemberPage}
        />
        <br></br>
        <br></br>
          <TeamMembersList teammembers={teammembers}/>
        <br></br>
        <br></br>
      </div>
    );
  }
}

TeamMembersPage.propTypes = {
  teammembers: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
  };

function mapStateToProps(state, ownProps){
        debugger;
  return{
    teammembers: state.TeamMembers
  };
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(TeamMemberActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamMembersPage);
