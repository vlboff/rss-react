import { IForm } from '../../interfaces';
import { ReactComponent as Star } from '../../assets/star.svg';
import { getImage } from '../../utils/utils';

function MoviesCard({ image, title, ganre, date, status, adult, vote, imgPath }: IForm) {
  return (
    <div className="movies-card">
      <div className="main-info">
        {getImage(imgPath, image as string)}
        <h3>{title}</h3>
      </div>

      <div className="info">
        <p>{ganre}</p>
        {vote ? (
          <div>
            <Star />
            <p>{vote}</p>
          </div>
        ) : null}
        <p>{`Date of release: ${date}`}</p>
        {status ? <p>{`Status - ${status}`}</p> : null}
        <h3 className="adult">{adult ? '18+' : ''}</h3>
      </div>
    </div>
  );
}

export default MoviesCard;
