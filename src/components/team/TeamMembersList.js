import React, {PropTypes} from 'react';
import  TeamMemberListRow from './TeamMemberListRow';

const TeamMembersList = ({teammembers}) => {
   return (
     <table className="table">
     <tbody>
       <tr>
         <th>&nbsp;</th>
         <th>Title</th>
         <th>Author</th>
         <th>Category</th>
         <th>Length</th>
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
