import * as React from "react";
// import { Select } from 'semantic-ui-react'

class SelectField extends React.Component {
  state = {
    defaultOption: null,
  };

  componentDidMount() {
    const { _id, options, onChange } = this.props;

    const defaultOption = options.filter(o => o.default)[0];
    if (defaultOption) {
      // let parent know that this field has a default value
      onChange(defaultOption.value, _id);
      this.setState({ defaultOption });
    }
  }

  handleChange = (e) => {
    const { _id, onChange } = this.props;

    onChange(e, _id);
  };

  render() {
    const { displayName, options, defaults } = this.props;

    const { defaultOption } = this.state;

    return (
      <div />
      // <div>

      //   {defaults.showLabels && <label>{displayName}</label>}

      //   <br />

      //   <Select
      //     defaultValue={defaultOption ? defaultOption.value : options[0].value}
      //     onChange={this.handleChange}
      //     options={options}
      //   />

      // </div>
    );
  }
}

export default SelectField;
