import { Ivalidation } from '../interfaces';

export function validation({
  inputTitleRef,
  inputDateRef,
  inputSelectRef,
  inputPosterRef,
  inputRadioRumoredRef,
  inputRadioPlannedRef,
  inputRadioInProductionRef,
  inputRadioPostProductionRef,
  inputRadioReleasedRef,
}: Ivalidation) {
  return {
    invalidTitle: inputTitleRef.current?.value ? '' : 'active',
    invalidGanre: inputSelectRef.current?.value ? '' : 'active',
    invalidDate: inputDateRef.current?.value
      ? Number(inputDateRef.current?.value.slice(0, 4)) > 1895
        ? ''
        : 'active'
      : 'active',
    invalidPoster: inputPosterRef.current?.value ? '' : 'active',
    invalidStatus: [
      inputRadioRumoredRef.current,
      inputRadioPlannedRef.current,
      inputRadioInProductionRef.current,
      inputRadioPostProductionRef.current,
      inputRadioReleasedRef.current,
    ].find((item) => item?.checked)?.value
      ? ''
      : 'active',
  };
}
