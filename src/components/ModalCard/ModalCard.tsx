import React, { useEffect, useState } from 'react';
import { getMoviesDetails } from '../../api/getMoviesDetails';
import { apiParams, IGetMoviesResults } from '../../interfaces';
import { getGanres, getImage, getMoney, getRuntime } from '../../utils/utils';
import { ReactComponent as PreloaderIcon } from '../../assets/preload_oval.svg';
import { ReactComponent as Star } from '../../assets/star.svg';

function ModalCard(props: {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  moviesId: number;
}) {
  const [moviesDetails, setMoviesDetails] = useState<IGetMoviesResults | null>(null);

  useEffect(() => {
    (async function () {
      setMoviesDetails(
        await getMoviesDetails(apiParams.detailPath, props.moviesId, apiParams.apiKey)
      );
    })();
  }, [props.moviesId]);

  useEffect(() => {
    if (props.active === false) {
      setMoviesDetails(null);
    }
  }, [props.active]);

  return (
    <div className={`modal ${props.active ? 'active' : ''}`} onClick={() => props.setActive(false)}>
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
        <div className="modal_image">
          <img
            src={`${getImage(apiParams.imgPath, moviesDetails?.poster_path)}`}
            alt="poster.jpg"
          />
        </div>
        {moviesDetails ? (
          <div className="modal_info">
            <h3 className="modal_title">{moviesDetails.title ? moviesDetails.title : ''}</h3>
            <div className="modal_ganre">
              {moviesDetails.genres ? getGanres(moviesDetails.genres) : ''}
            </div>
            <div className="modal_date">
              {moviesDetails.release_date ? `Date of release: ${moviesDetails.release_date}` : ''}
            </div>
            <div className="modal_runtime">
              {moviesDetails.runtime ? getRuntime(moviesDetails.runtime) : ''}
            </div>
            <div className="modal_overview">
              <em>{moviesDetails.overview ? moviesDetails.overview : ''}</em>
            </div>
            {moviesDetails.vote_average ? (
              <div className="modal_rating">
                <Star />
                <p>{moviesDetails.vote_average}</p>
              </div>
            ) : null}
            <div className="modal_budget">
              {`Budget: ${moviesDetails.budget ? getMoney(moviesDetails.budget) : 'unknown'}`}
            </div>
            <div className="modal_revenue">
              {`Revenue: ${moviesDetails.revenue ? getMoney(moviesDetails.revenue) : 'unknown'}`}
            </div>
          </div>
        ) : (
          <h1 className="preloader">
            <PreloaderIcon />
            <p>Loading...</p>
          </h1>
        )}
      </div>
    </div>
  );
}

export default ModalCard;
