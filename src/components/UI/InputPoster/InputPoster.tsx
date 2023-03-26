import React, { Component } from 'react';

class InputPoster extends Component<{
  inputPosterRef: React.RefObject<HTMLInputElement>;
  invalidPoster: string;
}> {
  constructor(props: { inputPosterRef: React.RefObject<HTMLInputElement>; invalidPoster: string }) {
    super(props);
  }

  render() {
    return (
      <div className="input-form">
        <label htmlFor="input-poster" className="input-poster">
          Add poster:
          <input
            ref={this.props.inputPosterRef}
            type="file"
            id="input-poster"
            accept=".png, .jpg, .jpeg"
          />
          <div>download image</div>
        </label>
        <p className={`invalid-form-text ${this.props.invalidPoster}`}>*upload some image</p>
      </div>
    );
  }
}

export default InputPoster;
