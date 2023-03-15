import { ReactComponent as Magnifier } from '../../../assets/magnifier.svg';

function SearchBar() {
  return (
    <div className="search-bar">
      <label>
        <Magnifier />
        <input type="text" placeholder="Search on the page" />
      </label>
    </div>
  );
}

export default SearchBar;
