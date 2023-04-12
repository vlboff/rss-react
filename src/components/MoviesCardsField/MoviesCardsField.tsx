import React from 'react';
import { useAppSelector } from '../../store/hooks';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardsField() {
  const cardsArray = useAppSelector((state) => state.forms.formsArray);

  return (
    <div className="movies-cards">
      {cardsArray.map((item) => (
        <MoviesCard
          key={`${item.title}${Math.random()}`}
          image={item.image}
          title={item.title}
          ganre={item.ganre}
          date={item.date ? item.date : 'unknown'}
          status={item.status ? item.status : 'unknown'}
          adult={item.adult}
        ></MoviesCard>
      ))}
    </div>
  );
}

export default MoviesCardsField;
