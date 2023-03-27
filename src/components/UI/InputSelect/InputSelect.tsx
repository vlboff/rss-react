import React, { Component } from 'react';

class InputSelect extends Component<{
  inputSelectRef: React.RefObject<HTMLSelectElement>;
  invalidGanre: string;
}> {
  constructor(props: { inputSelectRef: React.RefObject<HTMLSelectElement>; invalidGanre: string }) {
    super(props);
  }

  render() {
    return (
      <div className="input-form">
        <label htmlFor="input-select" className="input-select">
          {' '}
          Select ganre:
          <select ref={this.props.inputSelectRef} name="Select ganre" id="input-select">
            <option value="" hidden>
              choose one:
            </option>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Horror">Horror</option>
            <option value="Mystery">Mystery</option>
            <option value="Fantasy">Romance</option>
            <option value="Horror">Thriller</option>
            <option value="Mystery">Western</option>
          </select>
        </label>
        <p className={`invalid-form-text ${this.props.invalidGanre}`}>*choose one genre</p>
      </div>
    );
  }
}

export default InputSelect;
