import { IGetMovies, apiParams } from '../../interfaces';
import { getMovies } from '../../api/getMovies';
import MoviesCard from '../MoviesCard/MoviesCard';
import { getSearchedMovies } from '../../api/getSearchedMovies';
import { useEffect, useState } from 'react';

function FieldOfCards(props: { searchQuery: string | number }) {
  const [popularMovies, setPopularMovies] = useState<IGetMovies | null>(null);

  useEffect(() => {
    (async function () {
      setPopularMovies(await getMovies(apiParams.mainPath, apiParams.apiKey));
    })();
  }, []);

  useEffect(() => {
    if (props.searchQuery) {
      (async function () {
        setPopularMovies(
          await getSearchedMovies(apiParams.searchPath, apiParams.apiKey, props.searchQuery)
        );
      })();
    } else {
      (async function () {
        setPopularMovies(await getMovies(apiParams.mainPath, apiParams.apiKey));
      })();
    }
  }, [props.searchQuery]);

  return (
    <div className="field-of-cards">
      {popularMovies?.results.map((item) => (
        <MoviesCard
          key={item.id}
          imgPath={apiParams.imgPath}
          image={item.poster_path}
          title={item.title}
          vote={item.vote_average}
          date={item.release_date}
          adult={item.adult}
        />
      ))}
    </div>
  );
}

export default FieldOfCards;
