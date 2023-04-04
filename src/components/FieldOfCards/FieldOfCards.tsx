import data from '../../data/data.json';
import Card from '../Card/Card';
import { IProductData, apiParams } from '../../interfaces';
import { getMovies } from '../../api/getMovies';
import { getSearchedMovies } from '../../api/getSearchedMovies';
import { useEffect } from 'react';

function FieldOfCards(props: { searchValue: string | number }) {
  const products: IProductData[] = data.products;
  // useEffect(() => {
  //   getMovies(apiParams.mainPath, apiParams.apiKey);
  // }, []);

  useEffect(() => {
    // getSearchedMovies(apiParams.searchPath, apiParams.apiKey, props.searchValue);
    console.log(props.searchValue);
  }, [props.searchValue]);

  return (
    <div className="field-of-cards">
      {products.map((item) => (
        <Card
          key={item.title}
          img={item.thumbnail}
          title={item.title}
          rating={item.rating}
          stock={item.stock}
          price={item.price}
        />
      ))}
    </div>
  );
}

export default FieldOfCards;
