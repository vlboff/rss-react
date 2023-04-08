import { Ivalidation, IForm } from '../interfaces';

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

export function getImage(imgPath: string | undefined, image: string | null | undefined) {
  if (imgPath && image) {
    return `${imgPath}${image}`;
  } else if (!imgPath && image) {
    return image;
  } else {
    return NO_IMG;
  }
}

export function getGanres(
  ganres: {
    id: number;
    name: string;
  }[]
) {
  const arr = ganres.map((item) => item.name);
  if (arr.length > 1) {
    return `${arr[0]}, ${arr[1]}`;
  } else if (arr.length > 0) {
    return `${arr[0]}`;
  } else {
    return '';
  }
}

export function getRuntime(runtime: number) {
  const hh = Math.floor(runtime / 60);
  const mm = runtime % 60 > 9 ? runtime % 60 : `0${runtime % 60}`;
  return `${hh}h ${mm}m`;
}

export function getMoney(money: number) {
  return `${String(money).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')}$`;
}
