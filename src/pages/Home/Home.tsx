import { useEffect, useState } from 'react';
import SearchBar from '../..//components/UI/SearchBar/SearchBar';
import FieldOfCards from '../../components/FieldOfCards/FieldOfCards';

function Home(props: { setPath: () => void }) {
  const [searchQuery, setSearchQuery] = useState<string | number>('');

  useEffect(() => {
    props.setPath();
  }, [props]);

  return (
    <main>
      <SearchBar setSearchQuery={setSearchQuery} />
      <FieldOfCards searchQuery={searchQuery} />
    </main>
  );
}

export default Home;
