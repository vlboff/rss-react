import { IForm } from '../../interfaces';
import { ReactComponent as Star } from '../../assets/star.svg';

function MoviesCard({ image, title, ganre, date, status, adult, vote, imgPath }: IForm) {
  return (
    <div className="movies-card">
      {imgPath ? (
        <img src={`${imgPath}${image ? (image as string) : ''}`} alt="poster.jpg" />
      ) : (
        <img src={image ? (image as string) : ''} alt="poster.jpg" />
      )}
      <div className="info">
        <h3>{title}</h3>
        <p>{ganre}</p>
        {vote ? (
          <p>
            <Star /> {vote}
          </p>
        ) : null}
        <p>{`Date of release: ${date}`}</p>
        {status ? <p>{`Status - ${status}`}</p> : null}
        <h3 className="adult">{adult ? '18+' : ''}</h3>
      </div>
    </div>
  );
}

export default MoviesCard;
