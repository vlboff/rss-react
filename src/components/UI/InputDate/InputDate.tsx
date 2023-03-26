import React, { Component } from 'react';

class InputDate extends Component<{
  inputDateRef: React.RefObject<HTMLInputElement>;
  invalidDate: string;
}> {
  constructor(props: { inputDateRef: React.RefObject<HTMLInputElement>; invalidDate: string }) {
    super(props);
  }

  render() {
    return (
      <div className="input-form">
        <label htmlFor="input-date">
          Select release date
          <input ref={this.props.inputDateRef} type="date" id="input-date" min="1895-01-01" />
        </label>
        <div className={`invalid-form-text ${this.props.invalidDate}`}>
          <p>*set the date</p>
          <i className="small-font">release date cannot be earlier than 1895</i>
        </div>
      </div>
    );
  }
}

export default InputDate;
