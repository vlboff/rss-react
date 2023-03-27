import React, { Component } from 'react';

class InputTitle extends Component<{
  inputTitleRef: React.RefObject<HTMLInputElement>;
  invalidTitle: string;
}> {
  constructor(props: { inputTitleRef: React.RefObject<HTMLInputElement>; invalidTitle: string }) {
    super(props);
  }

  render() {
    return (
      <div className="input-form">
        <label htmlFor="input-title">
          Title:
          <input
            ref={this.props.inputTitleRef}
            type="text"
            id="input-title"
            placeholder="movie title"
          />
        </label>
        <p className={`invalid-form-text ${this.props.invalidTitle}`}>*add title</p>
      </div>
    );
  }
}

export default InputTitle;
