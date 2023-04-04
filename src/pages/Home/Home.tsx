import { useEffect, useState } from 'react';
import SearchBar from '../..//components/UI/SearchBar/SearchBar';
import FieldOfCards from '../../components/FieldOfCards/FieldOfCards';

function Home(props: { setPath: () => void }) {
  const [searchValue, setSearchValue] = useState<string | number>(
    localStorage.getItem('searchValue') || ''
  );
  useEffect(() => {
    props.setPath();
  }, [props]);

  return (
    <main>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <FieldOfCards searchValue={searchValue} />
    </main>
  );
}

export default Home;
