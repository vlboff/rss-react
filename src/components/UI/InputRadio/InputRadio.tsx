import React, { Component } from 'react';

class InputRadio extends Component<{
  inputRadioRef: React.RefObject<HTMLInputElement>;
  name: string;
}> {
  constructor(props: { inputRadioRef: React.RefObject<HTMLInputElement>; name: string }) {
    super(props);
  }

  render() {
    return (
      <label htmlFor={this.props.name}>
        <input
          ref={this.props.inputRadioRef}
          type="radio"
          id={this.props.name}
          name="status"
          value={this.props.name}
        />
        {this.props.name}
      </label>
    );
  }
}

export default InputRadio;
