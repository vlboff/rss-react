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

interface FileList {
  0: Blob | MediaSource;
  length: number;
}

export interface IForm {
  title: string | null | undefined;
  date: string | null | undefined;
  ganre: string | null | undefined;
  image: FileList | null;
  status: string | null | undefined;
  adult: boolean | undefined;
}

export const emptyFormState: IForm = {
  title: null,
  date: null,
  ganre: null,
  image: null,
  status: null,
  adult: false,
};

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
