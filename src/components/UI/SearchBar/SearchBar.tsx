import { Component } from 'react';
import { ReactComponent as Magnifier } from '../../../assets/magnifier.svg';

class SearchBar extends Component {
  state = {
    searchValue: localStorage.getItem('searchValue') || '',
  };

  onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem('searchValue', e.target.value);
    this.setState({
      searchValue: e.target.value,
    });
  };

  render() {
    return (
      <div className="search-bar">
        <label>
          <Magnifier />
          <input
            type="text"
            placeholder="Search on the page"
            value={this.state.searchValue}
            onChange={this.onValueChange}
          />
        </label>
      </div>
    );
  }
}

export default SearchBar;
