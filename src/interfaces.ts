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
  detailPath = 'https://api.themoviedb.org/3/movie/',
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

export interface FileList {
  0?: Blob | MediaSource;
  length: number;
}

export interface IForm {
  title: string | null | undefined;
  date: string | null | undefined;
  ganre?: string | null | undefined;
  imgPath?: string;
  image: string | null;
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
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: null | object;
  budget: number;
  genres: [
    {
      id: number;
      name: string;
    }
  ];
  homepage: string | null;
  id: number;
  imdb_id: string | null;
  original_language: string;
  original_title: string;
  overview: string | null;
  popularity: number;
  poster_path: string | null;
  production_companies: [
    {
      id: number;
      logo_path: string;
      name: string | null;
      origin_country: string;
    }
  ];
  production_countries: [
    {
      iso_3166_1: string;
      name: string;
    }
  ];
  release_date: string;
  revenue: number;
  runtime: number | null;
  spoken_languages: [
    {
      iso_639_1: string;
      name: string;
    }
  ];
  status: string;
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
