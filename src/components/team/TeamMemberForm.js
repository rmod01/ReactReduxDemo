import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const TeamMemberForm = ({teammember, allProjectCodes, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <h1>Manage Team Member</h1>
      <TextInput
        name="title"
        label="Name"        
        value={teammember.title}
        onChange={onChange}
        error={errors.title}/>

      <SelectInput
        name="ProjectCodeId"
        label="Project Code"
        value={teammember.ProjectCodeId}
        defaultOption="Select ProjectCode"
        options={allProjectCodes}
        onChange={onChange} error={errors.ProjectCodeId}/>

      <TextInput
        name="category"
        label="Resource Provider"
        value={teammember.category}
        onChange={onChange}
        error={errors.category}/>

      <TextInput
        name="length"
        label="Role"
        value={teammember.length}
        onChange={onChange}
        error={errors.length}/>

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
        <br></br>
        <br></br>
    </form>
  );
};

TeamMemberForm.propTypes = {
  teammember: PropTypes.object.isRequired,
  allProjectCodes: PropTypes.array.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default TeamMemberForm;
