/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { ReactComponent as Magnifier } from '../../../assets/magnifier.svg';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { setSearchValue } from '../../../store/searchValueSlice';
import { setSearchQuery } from '../../../store/searchQuerySlice';

function SearchBar() {
  const searchValue = useAppSelector((state) => state.searchValue.searchValue);

  const dispatch = useAppDispatch();

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      dispatch(setSearchQuery(e.currentTarget.value));
    }
  };

  useEffect(() => {
    dispatch(setSearchQuery(searchValue));
  }, []);

  return (
    <div className="search-bar">
      <label>
        <Magnifier />
        <input
          type="text"
          placeholder="Search on the page"
          value={searchValue}
          onChange={(e) => dispatch(setSearchValue(e.currentTarget.value))}
          onKeyDown={(e) => handleKeyDown(e)}
        />
      </label>
    </div>
  );
}

export default SearchBar;
