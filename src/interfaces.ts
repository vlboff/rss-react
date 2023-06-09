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
}

export interface IRadioField {
  inputRadioRumoredRef: React.RefObject<HTMLInputElement>;
  inputRadioPlannedRef: React.RefObject<HTMLInputElement>;
  inputRadioInProductionRef: React.RefObject<HTMLInputElement>;
  inputRadioPostProductionRef: React.RefObject<HTMLInputElement>;
  inputRadioReleasedRef: React.RefObject<HTMLInputElement>;
  invalidStatus: string;
}

export interface IForm {
  formRef: React.RefObject<HTMLFormElement>;
  onSubmit: () => void;
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
  cardState: ICardState;
}

export interface ICardState {
  title: string | null | undefined;
  date: string | null | undefined;
  ganre: string | null | undefined;
  image: string | null;
  status: string | null | undefined;
  adult: boolean | undefined;
  errors: {
    invalidTitle: string;
    invalidGanre: string;
    invalidDate: string;
    invalidPoster: string;
    invalidStatus: string;
  };
}

export interface Ivalidation {
  inputTitleRef: React.RefObject<HTMLInputElement>;
  inputDateRef: React.RefObject<HTMLInputElement>;
  inputSelectRef: React.RefObject<HTMLSelectElement>;
  inputPosterRef: React.RefObject<HTMLInputElement>;
  inputRadioRumoredRef: React.RefObject<HTMLInputElement>;
  inputRadioPlannedRef: React.RefObject<HTMLInputElement>;
  inputRadioInProductionRef: React.RefObject<HTMLInputElement>;
  inputRadioPostProductionRef: React.RefObject<HTMLInputElement>;
  inputRadioReleasedRef: React.RefObject<HTMLInputElement>;
}
