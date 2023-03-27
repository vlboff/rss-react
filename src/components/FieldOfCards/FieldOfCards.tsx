import data from '../../data/data.json';
import Card from '../Card/Card';
import { IProductData } from '../../interfaces';

function FieldOfCards() {
  const products: IProductData[] = data.products;
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
