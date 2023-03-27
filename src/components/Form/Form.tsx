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

  submit(event: React.MouseEvent<HTMLInputElement>) {
    event.preventDefault();
    this.props.onSubmit();
  }

  render() {
    return (
      <form ref={this.props.formRef}>
        <div className="inputs">
          <InputTitle
            inputTitleRef={this.props.inputTitleRef}
            invalidTitle={this.props.cardState.errors.invalidTitle}
          ></InputTitle>
          <InputPoster
            inputPosterRef={this.props.inputPosterRef}
            invalidPoster={this.props.cardState.errors.invalidPoster}
          ></InputPoster>
          <InputSelect
            inputSelectRef={this.props.inputSelectRef}
            invalidGanre={this.props.cardState.errors.invalidGanre}
          ></InputSelect>
          <InputDate
            inputDateRef={this.props.inputDateRef}
            invalidDate={this.props.cardState.errors.invalidDate}
          ></InputDate>
          <RadioField
            inputRadioRumoredRef={this.props.inputRadioRumoredRef}
            inputRadioPlannedRef={this.props.inputRadioPlannedRef}
            inputRadioInProductionRef={this.props.inputRadioInProductionRef}
            inputRadioPostProductionRef={this.props.inputRadioPostProductionRef}
            inputRadioReleasedRef={this.props.inputRadioReleasedRef}
            invalidStatus={this.props.cardState.errors.invalidStatus}
          ></RadioField>
          <InputAdult inputAdultRef={this.props.inputAdultRef}></InputAdult>
        </div>
        <div className="submit">
          <label htmlFor="input-submit">
            <input type="submit" value="submit" onClick={(event) => this.submit(event)} />
          </label>
        </div>
      </form>
    );
  }
}

export default Form;
