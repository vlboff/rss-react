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
