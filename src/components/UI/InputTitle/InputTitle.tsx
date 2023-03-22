import React, { Component } from 'react';

class InputTitle extends Component<{ inputTitleRef: React.RefObject<HTMLInputElement> }> {
  constructor(props: { inputTitleRef: React.RefObject<HTMLInputElement> }) {
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
      </div>
    );
  }
}

export default InputTitle;
