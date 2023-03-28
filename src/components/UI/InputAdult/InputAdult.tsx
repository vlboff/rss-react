import React, { Component } from 'react';

function InputAdult() {
  return (
    <div className="input-form">
      <label htmlFor="input-adult" className="input-adult">
        <input type="checkbox" name="adult" id="input-adult" />
        18+
      </label>
    </div>
  );
}

export default InputAdult;
