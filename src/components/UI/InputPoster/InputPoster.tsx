import React, { Component } from 'react';

function InputPoster() {
  return (
    <div className="input-form">
      <label htmlFor="input-poster" className="input-poster">
        Add poster:
        <input type="file" id="input-poster" accept=".png, .jpg, .jpeg" />
        <div>download image</div>
      </label>
      <p className={`invalid-form-text ${''}`}>*upload some image</p>
    </div>
  );
}

export default InputPoster;
