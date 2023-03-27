import { render, screen } from '@testing-library/react';
import React from 'react';
import Form from './Form';

describe('Form', () => {
  it('render inputs', () => {
    const inputTitleRef = React.createRef<HTMLInputElement>();
    const inputDateRef = React.createRef<HTMLInputElement>();
    const inputSelectRef = React.createRef<HTMLSelectElement>();
    const inputPosterRef = React.createRef<HTMLInputElement>();
    const inputRadioRumoredRef = React.createRef<HTMLInputElement>();
    const inputRadioPlannedRef = React.createRef<HTMLInputElement>();
    const inputRadioInProductionRef = React.createRef<HTMLInputElement>();
    const inputRadioPostProductionRef = React.createRef<HTMLInputElement>();
    const inputRadioReleasedRef = React.createRef<HTMLInputElement>();
    const inputAdultRef = React.createRef<HTMLInputElement>();
    const formRef = React.createRef<HTMLFormElement>();
    render(
      <Form
        formRef={formRef}
        onSubmit={() => {}}
        inputTitleRef={inputTitleRef}
        inputDateRef={inputDateRef}
        inputSelectRef={inputSelectRef}
        inputPosterRef={inputPosterRef}
        inputRadioRumoredRef={inputRadioRumoredRef}
        inputRadioPlannedRef={inputRadioPlannedRef}
        inputRadioInProductionRef={inputRadioInProductionRef}
        inputRadioPostProductionRef={inputRadioPostProductionRef}
        inputRadioReleasedRef={inputRadioReleasedRef}
        inputAdultRef={inputAdultRef}
        cardState={{
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
        }}
      />
    );
    const radioInputs = screen.getAllByRole('radio');
    const checkboxInputs = screen.getAllByRole('checkbox');
    expect(radioInputs).toHaveLength(5);
    expect(checkboxInputs).toHaveLength(1);
    expect(screen.getByLabelText('Title:')).toBeInTheDocument();
    expect(screen.getByLabelText('Select release date')).toBeInTheDocument();
    expect(screen.getByLabelText('Select ganre:')).toBeInTheDocument();
  });
});
