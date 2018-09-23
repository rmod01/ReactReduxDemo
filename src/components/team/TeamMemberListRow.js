import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const TeamMemberListRow = ({teammember}) => {
  return (
  <tr>
    <td><a href={teammember.watchHref} target="_blank">Watch</a></td>
    <td><Link to={'/teammember/' + teammember.id}>{teammember.title}</Link></td>
    <td>{teammember.ProjectCodeId}</td>
    <td>{teammember.category}</td>
    <td>{teammember.length}</td>
  </tr>
  );
};

TeamMemberListRow.propTypes = {
  teammember: PropTypes.object.isRequired
};

export default TeamMemberListRow;
