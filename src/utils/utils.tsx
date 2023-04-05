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

const NO_IMG =
  'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930';

export function getImage(imgPath: string | undefined, image: string) {
  if (imgPath && image) {
    return <img src={`${imgPath}${image}`} alt="poster.jpg" />;
  } else if (!imgPath && image) {
    return <img src={image} alt="poster.jpg" />;
  } else {
    return <img src={`${NO_IMG}`} alt="poster.jpg" />;
  }
}
