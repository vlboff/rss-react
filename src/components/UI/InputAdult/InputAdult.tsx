import React, { Component } from 'react';

class InputAdult extends Component<{ inputAdultRef: React.RefObject<HTMLInputElement> }> {
  constructor(props: { inputAdultRef: React.RefObject<HTMLInputElement> }) {
    super(props);
  }

  render() {
    return (
      <div className="input-form">
        <label htmlFor="input-adult" className="input-adult">
          <input ref={this.props.inputAdultRef} type="checkbox" name="adult" id="input-adult" />
          18+
        </label>
      </div>
    );
  }
}

export default InputAdult;
