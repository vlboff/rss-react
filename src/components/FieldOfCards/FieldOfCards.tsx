/* eslint-disable react-hooks/exhaustive-deps */
import { IGetMovies, apiParams } from '../../interfaces';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useEffect, useState } from 'react';
import { ReactComponent as PreloaderIcon } from '../../assets/preload_oval.svg';
import ModalCard from '../ModalCard/ModalCard';
import { useGetMoviesQuery, useGetSearchedMoviesQuery } from '../../store/moviesApi';
import { useAppSelector } from '../../store/hooks';

function FieldOfCards() {
  const [popularMovies, setPopularMovies] = useState<IGetMovies | null | undefined>(null);
  const [active, setActive] = useState(false);
  const [moviesId, setMoviesId] = useState(0);

  const searchQuery = useAppSelector((state) => state.searchQuery.searchQuery);

  const searchedMoviesParams = {
    apiKey: apiParams.apiKey,
    searchValue: searchQuery,
  };

  const { data: getMovies } = useGetMoviesQuery(apiParams.apiKey);
  const { data: getSearchedMovies } = useGetSearchedMoviesQuery(searchedMoviesParams);

  useEffect(() => {
    if (searchQuery) {
      setPopularMovies(getSearchedMovies);
    } else {
      setPopularMovies(getMovies);
    }
  }, [getMovies, getSearchedMovies]);

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
