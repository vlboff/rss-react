import { useEffect, useState } from 'react';
import { ReactComponent as Magnifier } from '../../../assets/magnifier.svg';

function SearchBar() {
  const [searchValue, setSearchValue] = useState<string>('');

  useEffect(() => {
    setSearchValue(localStorage.getItem('searchValue') || '');
  }, []);

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem('searchValue', e.target.value);
    setSearchValue(e.target.value);
  };

  return (
    <div className="search-bar">
      <label>
        <Magnifier />
        <input
          type="search"
          placeholder="Search on the page"
          value={searchValue}
          onChange={onValueChange}
        />
      </label>
    </div>
  );
}

export default SearchBar;
