import { ReactComponent as Star } from '../../assets/star.svg';
import { getImage } from '../../utils/utils';

function MoviesCard(props: {
  image: string | null | undefined;
  id?: number;
  title: string | null | undefined;
  ganre?: string | null | undefined;
  date: string | undefined;
  status?: string | undefined;
  adult: boolean | undefined;
  vote?: number | undefined;
  imgPath?: string | undefined;
  setActive?: React.Dispatch<React.SetStateAction<boolean>>;
  setMoviesId?: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div
      className="movies-card"
      onClick={() => {
        props.setActive!(true);
        props.setMoviesId!(props.id ? props.id : 0);
      }}
    >
      <div className="main-info">
        <img
          className={`main-info_image`}
          src={`${getImage(props.imgPath, props.image)}`}
          alt="poster.jpg"
        />
        <h3 className={`main-info_title`}>{props.title}</h3>
      </div>

      <div className="info">
        <p>{props.ganre}</p>
        {props.vote ? (
          <div>
            <Star />
            <p className={`info_vote}`}>{props.vote}</p>
          </div>
        ) : null}
        {props.date ? <p className={`info_date`}>{`Date of release: ${props.date}`}</p> : null}
        {props.status ? <p>{`Status - ${props.status}`}</p> : null}
        <h3 className="adult">{props.adult ? '18+' : ''}</h3>
      </div>
    </div>
  );
}

export default MoviesCard;
