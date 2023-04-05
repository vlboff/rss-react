import { IForm } from '../../interfaces';
import { ReactComponent as Star } from '../../assets/star.svg';
import { getImage } from '../../utils/utils';
import { ReactComponent as PreloaderIcon } from '../../assets/preloader.svg';

function MoviesCard({ image, title, ganre, date, status, adult, vote, imgPath }: IForm) {
  return (
    <div className="movies-card">
      <div className="main-info">
        <img
          className={`main-info_image`}
          src={`${getImage(imgPath, image as string)}`}
          alt="poster.jpg"
        />
        <h3 className={`main-info_title`}>{title}</h3>
      </div>

      <div className="info">
        <p>{ganre}</p>
        {vote ? (
          <div>
            <Star />
            <p className={`info_vote}`}>{vote}</p>
          </div>
        ) : null}
        {date ? <p className={`info_date`}>{`Date of release: ${date}`}</p> : null}
        {status ? <p>{`Status - ${status}`}</p> : null}
        <h3 className="adult">{adult ? '18+' : ''}</h3>
      </div>
    </div>
  );
}

export default MoviesCard;
