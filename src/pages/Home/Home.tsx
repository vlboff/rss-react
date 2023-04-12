import { useEffect, useState } from 'react';
import SearchBar from '../..//components/UI/SearchBar/SearchBar';
import FieldOfCards from '../../components/FieldOfCards/FieldOfCards';

function Home(props: { setPath: () => void }) {
  const [searchQuery, setSearchQuery] = useState<string | number>('');
  const [searchValue, setSearchValue] = useState<string | number>(
    localStorage.getItem('searchValue') || ''
  );

  useEffect(() => {
    props.setPath();
  }, [props]);

  return (
    <main>
      <SearchBar
        setSearchQuery={setSearchQuery}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <FieldOfCards searchQuery={searchQuery} searchValue={searchValue} />
    </main>
  );
}

export default Home;
