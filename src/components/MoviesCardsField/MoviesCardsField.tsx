/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { IForm } from '../../interfaces';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardsField(props: {
  formData: IForm;
  setLengthArray: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [cardsArray, setCardsArray] = useState<IForm[]>([]);

  useEffect(() => {
    props.setLengthArray(cardsArray.length);
  }, [cardsArray]);

  useEffect(() => {
    setCardsArray(() =>
      props.formData.title ? [...cardsArray, structuredClone(props.formData)] : [...cardsArray]
    );
  }, [props.formData]);

  return (
    <div className="movies-cards">
      {cardsArray.map((item) => (
        <MoviesCard
          key={`${item.title}${Math.random()}`}
          image={item.image ? (item.image[0] ? URL.createObjectURL(item.image[0]) : '') : ''}
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
