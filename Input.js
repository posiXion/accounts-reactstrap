import React from 'react';
import FormGroup from 'reactstrap/lib/FormGroup'
import Input from 'reactstrap/lib/Input'
import Label from 'reactstrap/lib/Label'
import FormFeedback from 'reactstrap/lib/FormFeedback'

// const iconMapper = {
//   username: 'user',
//   email: 'mail',
//   password: 'lock',
//   confirmPassword: 'unlock alternate',
//   currentPassword: 'unlock alternate',
//   fullName: 'info',
// };

const InputField = (fieldObj) => {
  const {
    _id,
    displayName,
    type,
    onChange,
    placeholder,
    required, // By default is true, if equals false than ignore
    icon,
    focusInput,
    error,
    defaults,
  } = fieldObj;

  const autocomplete = fieldObj.autocomplete || fieldObj._id;

  return (
    <FormGroup>
      <Label>
        {displayName}
      </Label>
      <Input
        autoFocus={focusInput}
        placeholder={defaults.showPlaceholders ? placeholder : ''}
        type={type}
        invalid={Boolean(error)}
        onChange={e => onChange(e, _id)}
        onBlur={e => onChange(e, _id)}
        autoComplete={autocomplete}
      />
      {error && <FormFeedback>{error.errStr}</FormFeedback>}
    </FormGroup>
  );
};

export default InputField;
