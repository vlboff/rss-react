import React, { Component } from 'react';

function InputDate() {
  return (
    <div className="input-form">
      <label htmlFor="input-date">
        Select release date
        <input type="date" id="input-date" min="1895-01-01" />
      </label>
      <div className={`invalid-form-text ${''}`}>
        <p>*set the date</p>
        <i className="small-font">release date cannot be earlier than 1895</i>
      </div>
    </div>
  );
}

export default InputDate;
