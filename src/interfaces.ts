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
