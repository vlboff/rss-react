import { useState } from 'react';
import { ReactComponent as Magnifier } from '../../../assets/magnifier.svg';

function SearchBar(props: {
  setSearchQuery: React.Dispatch<React.SetStateAction<string | number>>;
}) {
  const [searchValue, setSearchValue] = useState<string | number>(
    localStorage.getItem('searchValue') || ''
  );
  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem('searchValue', e.target.value);
    setSearchValue(e.target.value);
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      props.setSearchQuery(searchValue);
    }
  };

  return (
    <div className="search-bar">
      <label>
        <Magnifier />
        <input
          type="text"
          placeholder="Search on the page"
          value={searchValue}
          onChange={onValueChange}
          onKeyDown={(e) => handleKeyDown(e)}
        />
      </label>
    </div>
  );
}

export default SearchBar;
