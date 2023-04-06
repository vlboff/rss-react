import { IGetMovies, apiParams } from '../../interfaces';
import { getMovies } from '../../api/getMovies';
import MoviesCard from '../MoviesCard/MoviesCard';
import { getSearchedMovies } from '../../api/getSearchedMovies';
import { useEffect, useState } from 'react';
import { ReactComponent as PreloaderIcon } from '../../assets/preload_oval.svg';
import ModalCard from '../ModalCard/ModalCard';

function FieldOfCards(props: { searchQuery: string | number }) {
  const [popularMovies, setPopularMovies] = useState<IGetMovies | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    (async function () {
      setPopularMovies(await getMovies(apiParams.mainPath, apiParams.apiKey));
    })();
  }, []);

  useEffect(() => {
    if (props.searchQuery) {
      setPopularMovies(null);
      (async function () {
        setPopularMovies(
          await getSearchedMovies(apiParams.searchPath, apiParams.apiKey, props.searchQuery)
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
            imgPath={apiParams.imgPath}
            image={item.poster_path}
            title={item.title}
            vote={item.vote_average}
            date={item.release_date}
            adult={item.adult}
            setActive={setActive}
          />
        ))}
      </div>
      <ModalCard active={active} setActive={setActive} />
    </>
  ) : (
    <h1 className="preloader">
      <PreloaderIcon />
      <p>Loading...</p>
    </h1>
  );
}

export default FieldOfCards;
