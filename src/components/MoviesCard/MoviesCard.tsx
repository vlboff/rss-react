import { IForm } from '../../interfaces';

function MoviesCard(props: { cardState: IForm }) {
  return (
    <div className="movies-card">
      <img
        src={
          props.cardState.image
            ? props.cardState.image[0]
              ? URL.createObjectURL(props.cardState.image[0])
              : ''
            : ''
        }
        alt="poster.jpg"
      />
      <div className="info">
        <h3>{props.cardState.title}</h3>
        <p>{props.cardState.ganre}</p>
        <p>{`Date of release: ${props.cardState.date ? props.cardState.date : 'unknown'}`}</p>
        <p>{`Status - ${props.cardState.status ? props.cardState.status : 'unknown'}`}</p>
        <h3 className="adult">{props.cardState.adult ? '18+' : ''}</h3>
      </div>
    </div>
  );
}

export default MoviesCard;
