/* eslint-disable react-hooks/exhaustive-deps */
import { IGetMovies, apiParams } from '../../interfaces';
import { getMovies } from '../../api/getMovies';
import MoviesCard from '../MoviesCard/MoviesCard';
import { getSearchedMovies } from '../../api/getSearchedMovies';
import { useEffect, useState } from 'react';
import { ReactComponent as PreloaderIcon } from '../../assets/preload_oval.svg';
import ModalCard from '../ModalCard/ModalCard';

function FieldOfCards(props: { searchQuery: string | number; searchValue: string | number }) {
  const [popularMovies, setPopularMovies] = useState<IGetMovies | null>(null);
  const [active, setActive] = useState(false);
  const [moviesId, setMoviesId] = useState(0);

  useEffect(() => {
    if (props.searchQuery) {
      setPopularMovies(null);
      (async function () {
        setPopularMovies(
          await getSearchedMovies(apiParams.searchPath, apiParams.apiKey, props.searchQuery)
        );
      })();
    } else if (props.searchValue) {
      setPopularMovies(null);
      (async function () {
        setPopularMovies(
          await getSearchedMovies(apiParams.searchPath, apiParams.apiKey, props.searchValue)
        );
      })();
    } else {
      setPopularMovies(null);
      (async function () {
        setPopularMovies(await getMovies(apiParams.mainPath, apiParams.apiKey));
      })();
    }
  }, [props.searchQuery]);

  return popularMovies ? (
    <>
      <div className="field-of-cards">
        {popularMovies.results.map((item) => (
          <MoviesCard
            key={item.id}
            id={item.id}
            imgPath={apiParams.imgPath}
            image={item.poster_path}
            title={item.title}
            vote={item.vote_average}
            date={item.release_date}
            adult={item.adult}
            setActive={setActive}
            setMoviesId={setMoviesId}
          />
        ))}
      </div>
      <ModalCard active={active} setActive={setActive} moviesId={moviesId} />
    </>
  ) : (
    <h1 className="preloader">
      <PreloaderIcon />
      <p>Loading...</p>
    </h1>
  );
}

export default FieldOfCards;
