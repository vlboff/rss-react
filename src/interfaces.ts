export interface IProductData {
  [key: string]: number | string | string[];
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface IData {
  products: IProductData[];
  total: number;
  skip: number;
  limit: number;
}

export enum pagePath {
  home = '#/',
  about = '#/about',
  forms = '#/forms',
}

export enum namePage {
  home = 'Home',
  about = 'About us',
  forms = 'Forms',
  notFound = '404',
}

export enum radioButton {
  rumored = 'Rumored',
  planned = 'Planned',
  inProduction = 'In Production',
  postProduction = 'Post Production',
  released = 'Released',
  canceled = 'Canceled',
}

export interface IRadioField {
  inputRadioRumoredRef: React.RefObject<HTMLInputElement>;
  inputRadioPlannedRef: React.RefObject<HTMLInputElement>;
  inputRadioInProductionRef: React.RefObject<HTMLInputElement>;
  inputRadioPostProductionRef: React.RefObject<HTMLInputElement>;
  inputRadioReleasedRef: React.RefObject<HTMLInputElement>;
  inputRadioCanceledRef: React.RefObject<HTMLInputElement>;
}

export interface IForm {
  onSubmit: (event: { preventDefault: () => void }) => void;
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
}
