import { useState } from 'react';
import { ReactComponent as Magnifier } from '../../../assets/magnifier.svg';
import { getSearchedMovies } from '../../../api/getSearchedMovies';

function SearchBar(props: {
  searchValue: string | number;
  setSearchValue: React.Dispatch<React.SetStateAction<string | number>>;
}) {
  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem('searchValue', e.target.value);
    props.setSearchValue(e.target.value);
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      // getSearchedMovies();
      console.log('enter');
      console.log(props.searchValue);
    }
  };

  return (
    <div className="search-bar">
      <label>
        <Magnifier />
        <input
          type="text"
          placeholder="Search on the page"
          value={props.searchValue}
          onChange={onValueChange}
          onKeyDown={(e) => handleKeyDown(e)}
        />
      </label>
    </div>
  );
}

export default SearchBar;
