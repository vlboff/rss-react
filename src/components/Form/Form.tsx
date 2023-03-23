import React, { Component } from 'react';
import InputTitle from '../UI/InputTitle/InputTitle';
import InputDate from '../UI/InputDate/InputDate';
import InputSelect from '../UI/InputSelect/InputSelect';
import InputPoster from '../UI/InputPoster/InputPoster';
import RadioField from '../RadioField/RadioField';
import InputAdult from '../UI/InputAdult/InputAdult';
import { IForm } from '../../interfaces';

class Form extends Component<IForm> {
  constructor(props: IForm) {
    super(props);
  }
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <div className="inputs">
          <InputTitle inputTitleRef={this.props.inputTitleRef}></InputTitle>
          <InputPoster inputPosterRef={this.props.inputPosterRef}></InputPoster>
          <InputSelect inputSelectRef={this.props.inputSelectRef}></InputSelect>
          <InputDate inputDateRef={this.props.inputDateRef}></InputDate>
          <RadioField
            inputRadioRumoredRef={this.props.inputRadioRumoredRef}
            inputRadioPlannedRef={this.props.inputRadioPlannedRef}
            inputRadioInProductionRef={this.props.inputRadioInProductionRef}
            inputRadioPostProductionRef={this.props.inputRadioPostProductionRef}
            inputRadioReleasedRef={this.props.inputRadioReleasedRef}
            inputRadioCanceledRef={this.props.inputRadioCanceledRef}
          ></RadioField>
          <InputAdult inputAdultRef={this.props.inputAdultRef}></InputAdult>
        </div>
        <div className="submit">
          <label htmlFor="input-submit">
            <input type="submit" value="submit" />
          </label>
        </div>
      </form>
    );
  }
}

export default Form;
