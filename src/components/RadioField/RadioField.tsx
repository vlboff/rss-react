import React, { Component } from 'react';
import { radioButton, IRadioField } from '../../interfaces';
import InputRadio from '../UI/InputRadio/InputRadio';

function RadioField() {
  const radioButtonArr = [
    { name: radioButton.rumored },
    { name: radioButton.planned },
    { name: radioButton.inProduction },
    { name: radioButton.postProduction },
    { name: radioButton.released },
  ];

  return (
    <div className="input-form">
      <p>Status:</p>
      <div className="input-form-radio">
        {radioButtonArr.map((item) => (
          <InputRadio key={`${item.name}${Math.random()}`} name={item.name}></InputRadio>
        ))}
      </div>
      <p className={`invalid-form-text ${''}`}>*choose status</p>
    </div>
  );
}

export default RadioField;
