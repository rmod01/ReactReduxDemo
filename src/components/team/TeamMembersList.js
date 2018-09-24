import React, {PropTypes} from 'react';
import  TeamMemberListRow from './TeamMemberListRow';

const TeamMembersList = ({teammembers}) => {
   return (
     <table className="table">
     <tbody>
       <tr>
         <th>&nbsp;</th>
         <th>Name</th>
         <th>Project Code</th>
         <th>Resource Provider</th>
         <th>Role</th>
       </tr>
        {teammembers.map(teammember =>
        <TeamMemberListRow key={teammember.id} teammember={teammember}/>
        )}
     </tbody>
     </table>
   );
};

TeamMembersList.propTypes = {
  teammembers: PropTypes.array.isRequired
};

export default TeamMembersList;
