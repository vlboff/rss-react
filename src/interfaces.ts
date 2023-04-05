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

export enum apiParams {
  mainPath = 'https://api.themoviedb.org/3/movie/popular',
  searchPath = 'https://api.themoviedb.org/3/search/movie',
  imgPath = 'https://image.tmdb.org/t/p/original',
  apiKey = '66930cf47c708be8448292a4eb1d7ab5',
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
  0?: Blob | MediaSource;
  length: number;
}

export interface IForm {
  title: string | null | undefined;
  date: string | null | undefined;
  ganre?: string | null | undefined;
  imgPath?: string;
  image: FileList | null;
  status?: string | null | undefined;
  vote?: number | null | undefined;
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

export interface IGetMovies {
  page: number;
  results: IGetMoviesResults[];
  total_results: number;
  total_pages: number;
}

export interface IGetMoviesResults {
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}
