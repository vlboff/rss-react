import { Component } from 'react';
import SearchBar from '../..//components/UI/SearchBar/SearchBar';
import FieldOfCards from '../../components/FieldOfCards/FieldOfCards';

class Home extends Component<{ setPath: () => void }> {
  constructor(props: { setPath: () => void }) {
    super(props);
  }

  componentDidMount() {
    this.props.setPath();
  }

  render() {
    return (
      <main>
        <SearchBar />
        <FieldOfCards />
      </main>
    );
  }
}

export default Home;
