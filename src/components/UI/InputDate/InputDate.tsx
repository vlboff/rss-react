import React, { Component } from 'react';

class InputDate extends Component<{ inputDateRef: React.RefObject<HTMLInputElement> }> {
  constructor(props: { inputDateRef: React.RefObject<HTMLInputElement> }) {
    super(props);
  }

  render() {
    return (
      <div className="input-form">
        <label htmlFor="input-date">
          Select release date
          <input ref={this.props.inputDateRef} type="date" id="input-date" />
        </label>
      </div>
    );
  }
}

export default InputDate;
