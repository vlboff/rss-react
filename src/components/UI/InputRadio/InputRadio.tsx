import React, { Component } from 'react';

function InputRadio(props: { name: string }) {
  return (
    <label htmlFor={props.name}>
      <input type="radio" id={props.name} name="status" value={props.name} />
      {props.name}
    </label>
  );
}

export default InputRadio;
