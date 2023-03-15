import { ReactComponent as Star } from '../../assets/star.svg';

interface ICard {
  img: string;
  title: string;
  rating: number;
  stock: number;
  price: number;
}

function Card({ img, title, rating, stock, price }: ICard) {
  return (
    <div className="card">
      <div className="card_img" style={{ background: `url(${img}) 0% center / cover` }}></div>
      <div className="card_title">
        <p>{title}</p>
      </div>
      <div className="card_dscr">
        <div className="card_rating">
          <div>
            <Star /> {rating}
          </div>{' '}
          <div>stock: {stock}</div>
        </div>
        <p className="card_price">€{price}</p>
      </div>
    </div>
  );
}

export default Card;
