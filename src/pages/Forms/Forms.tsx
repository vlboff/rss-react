import React, { Component } from 'react';
import Form from '../../components/Form/Form';

class Forms extends Component<{ setPath: () => void }> {
  inputTitleRef: React.RefObject<HTMLInputElement>;
  inputDateRef: React.RefObject<HTMLInputElement>;
  inputSelectRef: React.RefObject<HTMLSelectElement>;
  inputPosterRef: React.RefObject<HTMLInputElement>;
  inputRadioRumoredRef: React.RefObject<HTMLInputElement>;
  inputRadioPlannedRef: React.RefObject<HTMLInputElement>;
  inputRadioInProductionRef: React.RefObject<HTMLInputElement>;
  inputRadioPostProductionRef: React.RefObject<HTMLInputElement>;
  inputRadioReleasedRef: React.RefObject<HTMLInputElement>;
  inputRadioCanceledRef: React.RefObject<HTMLInputElement>;
  inputAdultRef: React.RefObject<HTMLInputElement>;
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
    this.inputRadioCanceledRef = React.createRef<HTMLInputElement>();
    this.inputAdultRef = React.createRef<HTMLInputElement>();
  }

  componentDidMount() {
    this.props.setPath();
    this.inputTitleRef.current?.focus();
  }

  handleSubmit(event: { preventDefault: () => void }) {
    console.log(this.inputTitleRef.current?.value);
    console.log(this.inputDateRef.current?.value);
    console.log(this.inputSelectRef.current?.value);
    console.log(this.inputPosterRef.current?.files ? this.inputPosterRef.current?.files[0] : null);
    console.log([
      this.inputRadioRumoredRef.current?.checked,
      this.inputRadioCanceledRef.current?.checked,
    ]);
    console.log(this.inputAdultRef.current?.checked);
    event.preventDefault();
  }

  render() {
    return (
      <main>
        <Form
          onSubmit={(event: { preventDefault: () => void }) => this.handleSubmit(event)}
          inputTitleRef={this.inputTitleRef}
          inputDateRef={this.inputDateRef}
          inputSelectRef={this.inputSelectRef}
          inputPosterRef={this.inputPosterRef}
          inputRadioRumoredRef={this.inputRadioRumoredRef}
          inputRadioPlannedRef={this.inputRadioPlannedRef}
          inputRadioInProductionRef={this.inputRadioInProductionRef}
          inputRadioPostProductionRef={this.inputRadioPostProductionRef}
          inputRadioReleasedRef={this.inputRadioReleasedRef}
          inputRadioCanceledRef={this.inputRadioCanceledRef}
          inputAdultRef={this.inputAdultRef}
        ></Form>
      </main>
    );
  }
}

export default Forms;
