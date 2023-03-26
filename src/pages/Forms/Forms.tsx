import React, { Component } from 'react';
import Form from '../../components/Form/Form';
import MoviesCardsField from '../../components/MoviesCardsField/MoviesCardsField';
import { ICardState } from '../../interfaces';

class Forms extends Component<{ setPath: () => void }, ICardState> {
  inputTitleRef: React.RefObject<HTMLInputElement>;
  inputDateRef: React.RefObject<HTMLInputElement>;
  inputSelectRef: React.RefObject<HTMLSelectElement>;
  inputPosterRef: React.RefObject<HTMLInputElement>;
  inputRadioRumoredRef: React.RefObject<HTMLInputElement>;
  inputRadioPlannedRef: React.RefObject<HTMLInputElement>;
  inputRadioInProductionRef: React.RefObject<HTMLInputElement>;
  inputRadioPostProductionRef: React.RefObject<HTMLInputElement>;
  inputRadioReleasedRef: React.RefObject<HTMLInputElement>;
  inputAdultRef: React.RefObject<HTMLInputElement>;
  formRef: React.RefObject<HTMLFormElement>;
  constructor(props: { setPath: () => void }) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputTitleRef = React.createRef<HTMLInputElement>();
    this.inputDateRef = React.createRef<HTMLInputElement>();
    this.inputSelectRef = React.createRef<HTMLSelectElement>();
    this.inputPosterRef = React.createRef<HTMLInputElement>();
    this.inputRadioRumoredRef = React.createRef<HTMLInputElement>();
    this.inputRadioPlannedRef = React.createRef<HTMLInputElement>();
    this.inputRadioInProductionRef = React.createRef<HTMLInputElement>();
    this.inputRadioPostProductionRef = React.createRef<HTMLInputElement>();
    this.inputRadioReleasedRef = React.createRef<HTMLInputElement>();
    this.inputAdultRef = React.createRef<HTMLInputElement>();
    this.formRef = React.createRef<HTMLFormElement>();
    this.state = {
      title: null,
      date: null,
      ganre: null,
      image: null,
      status: null,
      adult: false,
      errors: {
        invalidTitle: '',
        invalidGanre: '',
        invalidDate: '',
        invalidPoster: '',
        invalidStatus: '',
      },
    };
  }

  componentDidMount() {
    this.props.setPath();
    this.inputTitleRef.current?.focus();
  }

  handleSubmit() {
    this.setState({
      title: this.inputTitleRef.current?.value,
      date: this.inputDateRef.current?.value,
      ganre: this.inputSelectRef.current?.value,
      image: this.inputPosterRef.current?.value
        ? this.inputPosterRef.current?.files
          ? URL.createObjectURL(this.inputPosterRef.current?.files[0])
          : null
        : null,
      status: [
        this.inputRadioRumoredRef.current,
        this.inputRadioPlannedRef.current,
        this.inputRadioInProductionRef.current,
        this.inputRadioPostProductionRef.current,
        this.inputRadioReleasedRef.current,
      ].find((item) => item?.checked)?.value,
      adult: this.inputAdultRef.current?.checked,
      errors: {
        invalidTitle: this.inputTitleRef.current?.value ? '' : 'active',
        invalidGanre: this.inputSelectRef.current?.value ? '' : 'active',
        invalidDate: this.inputDateRef.current?.value
          ? Number(this.inputDateRef.current?.value.slice(0, 4)) > 1895
            ? ''
            : 'active'
          : 'active',
        invalidPoster: this.inputPosterRef.current?.value ? '' : 'active',
        invalidStatus: [
          this.inputRadioRumoredRef.current,
          this.inputRadioPlannedRef.current,
          this.inputRadioInProductionRef.current,
          this.inputRadioPostProductionRef.current,
          this.inputRadioReleasedRef.current,
        ].find((item) => item?.checked)?.value
          ? ''
          : 'active',
      },
    });
    this.formRef.current?.reset();
  }

  render() {
    return (
      <main>
        <Form
          formRef={this.formRef}
          onSubmit={() => this.handleSubmit()}
          inputTitleRef={this.inputTitleRef}
          inputDateRef={this.inputDateRef}
          inputSelectRef={this.inputSelectRef}
          inputPosterRef={this.inputPosterRef}
          inputRadioRumoredRef={this.inputRadioRumoredRef}
          inputRadioPlannedRef={this.inputRadioPlannedRef}
          inputRadioInProductionRef={this.inputRadioInProductionRef}
          inputRadioPostProductionRef={this.inputRadioPostProductionRef}
          inputRadioReleasedRef={this.inputRadioReleasedRef}
          inputAdultRef={this.inputAdultRef}
          cardState={this.state}
        ></Form>
        <MoviesCardsField cardState={this.state}></MoviesCardsField>
      </main>
    );
  }
}

export default Forms;
