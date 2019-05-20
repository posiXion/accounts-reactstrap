import * as React from "react";
// import { Form, Radio, Label } from 'semantic-ui-react'

class RadioField extends React.Component {
  componentDidMount() {
    const { _id, options, onChange } = this.props;

    const defaultOption = options.filter(o => o.default)[0];
    if (defaultOption) {
      // let parent know that this field has a default value
      onChange(defaultOption.value, _id);
    }
  }

  handleChange = (e, { value }) => {
    const { _id, onChange } = this.props;

    onChange(value, _id);
  };

  render() {
    const {
      _id, values, displayName, options, required, error, defaults,
    } = this.props;

    return (
      <div />
      // <Form.Field required={required !== false} error={error ? true : false}>

      //   {defaults.showLabels && <label>{displayName}</label>}

      //   <Form.Group grouped>

      //     {options.map((option, i) => (

      //       <Form.Field key={i}>

      //         <Radio
      //           label={option.text}
      //           value={option.value}
      //           checked={values[_id] === option.value}
      //           onChange={this.handleChange}
      //         />

      //       </Form.Field>
      //     ))}

      //     {error && <Label basic color='red' pointing>{error.errStr}</Label>}

      //   </Form.Group>

      // </Form.Field>
    );
  }
}

RadioField.defaultProps = {
  type: 'text',
};

export default RadioField;
