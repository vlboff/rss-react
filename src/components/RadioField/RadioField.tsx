import React, { Component } from 'react';
import { radioButton, IRadioField } from '../../interfaces';
import InputRadio from '../UI/InputRadio/InputRadio';

class RadioField extends Component<IRadioField> {
  radioButtonArr = [
    { name: radioButton.rumored, ref: this.props.inputRadioRumoredRef },
    { name: radioButton.planned, ref: this.props.inputRadioPlannedRef },
    { name: radioButton.inProduction, ref: this.props.inputRadioInProductionRef },
    { name: radioButton.postProduction, ref: this.props.inputRadioPostProductionRef },
    { name: radioButton.released, ref: this.props.inputRadioReleasedRef },
  ];
  constructor(props: IRadioField) {
    super(props);
  }

  render() {
    return (
      <div className="input-form">
        <p>Status:</p>
        <div className="input-form-radio">
          {this.radioButtonArr.map((item) => (
            <InputRadio
              key={`${item.name}${Math.random()}`}
              inputRadioRef={item.ref}
              name={item.name}
            ></InputRadio>
          ))}
        </div>
        <p className={`invalid-form-text ${this.props.invalidStatus}`}>*choose status</p>
      </div>
    );
  }
}

export default RadioField;
