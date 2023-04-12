/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { ReactComponent as Magnifier } from '../../../assets/magnifier.svg';

function SearchBar(props: {
  setSearchQuery: React.Dispatch<React.SetStateAction<string | number>>;
  searchValue: string | number;
  setSearchValue: React.Dispatch<React.SetStateAction<string | number>>;
}) {
  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem('searchValue', e.target.value);
    props.setSearchValue(e.target.value);
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      props.setSearchQuery(props.searchValue);
    }
  };

  useEffect(() => {
    props.setSearchQuery(props.searchValue);
  }, []);

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
