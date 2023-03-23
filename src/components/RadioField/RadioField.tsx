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
    { name: radioButton.canceled, ref: this.props.inputRadioCanceledRef },
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
            <InputRadio key={item.name} inputRadioRef={item.ref} name={item.name}></InputRadio>
          ))}
        </div>
      </div>
    );
  }
}

export default RadioField;