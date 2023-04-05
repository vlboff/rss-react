import { useEffect } from 'react';
import SearchBar from '../..//components/UI/SearchBar/SearchBar';
import FieldOfCards from '../../components/FieldOfCards/FieldOfCards';

function Home(props: { setPath: () => void }) {
  useEffect(() => {
    props.setPath();
  }, [props]);

  return (
    <main>
      <SearchBar />
      <FieldOfCards />
    </main>
  );
}

export default Home;
