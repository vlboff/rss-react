import React from 'react';
import { validation } from './utils';

describe('utils', () => {
  it('validation returns correct invalid states', () => {
    const inputTitleRef = React.createRef<HTMLInputElement>();
    const inputDateRef = React.createRef<HTMLInputElement>();
    const inputSelectRef = React.createRef<HTMLSelectElement>();
    const inputPosterRef = React.createRef<HTMLInputElement>();
    const inputRadioRumoredRef = React.createRef<HTMLInputElement>();
    const inputRadioPlannedRef = React.createRef<HTMLInputElement>();
    const inputRadioInProductionRef = React.createRef<HTMLInputElement>();
    const inputRadioPostProductionRef = React.createRef<HTMLInputElement>();
    const inputRadioReleasedRef = React.createRef<HTMLInputElement>();

    const invalid = validation({
      inputTitleRef,
      inputDateRef,
      inputSelectRef,
      inputPosterRef,
      inputRadioRumoredRef,
      inputRadioPlannedRef,
      inputRadioInProductionRef,
      inputRadioPostProductionRef,
      inputRadioReleasedRef,
    });

    expect(invalid).toEqual({
      invalidTitle: 'active',
      invalidGanre: 'active',
      invalidDate: 'active',
      invalidPoster: 'active',
      invalidStatus: 'active',
    });
  });

  it('should not return invalid date when year is 1895 or greater', () => {
    const inputDateRef = { current: { value: '1896-01-01' } } as React.RefObject<HTMLInputElement>;
    const { invalidDate } = validation({
      inputTitleRef: { current: null },
      inputDateRef,
      inputSelectRef: { current: null },
      inputPosterRef: { current: null },
      inputRadioRumoredRef: { current: null },
      inputRadioPlannedRef: { current: null },
      inputRadioInProductionRef: { current: null },
      inputRadioPostProductionRef: { current: null },
      inputRadioReleasedRef: { current: null },
    });
    expect(invalidDate).toEqual('');
  });
});
