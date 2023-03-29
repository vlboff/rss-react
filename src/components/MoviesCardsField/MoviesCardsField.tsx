import React, { useEffect, useState } from 'react';
import { IForm } from '../../interfaces';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardsField(props: { formData: IForm }) {
  const [cardsArray, setCardsArray] = useState<IForm[]>([]);

  useEffect(() => {
    setCardsArray(() => (props.formData.title ? [...cardsArray, props.formData] : [...cardsArray]));
  }, [props.formData]);

  return (
    <div className="movies-cards">
      {cardsArray.map((item) => (
        <MoviesCard key={`${item.title}${Math.random()}`} cardState={item}></MoviesCard>
      ))}
    </div>
  );
}

export default MoviesCardsField;
