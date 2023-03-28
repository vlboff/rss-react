import { useState } from 'react';
import HeaderButtom from '../UI/HeaderButtom/HeaderButtom';
import { pagePath, namePage } from '../../interfaces';

const pagesPathArray = [pagePath.home, pagePath.about, pagePath.forms];
const pagesArray = [
  { name: namePage.home, link: '/' },
  { name: namePage.about, link: '/about' },
  { name: namePage.forms, link: '/forms' },
];

function Header(props: { path: string }) {
  const [activeMode, setActiveMode] = useState(sessionStorage.getItem('pageName') || namePage.home);

  const addActive = (name: string) => {
    sessionStorage.setItem('pageName', name);
    setActiveMode(name);
  };

  const pageName = (name: string) => {
    const path = props.path;
    const currentPage = pagesArray.find((item) => item.name === name);
    if (currentPage?.name) {
      return path && pagesPathArray.every((i) => i !== path) ? namePage.notFound : currentPage.name;
    }
  };

  return (
    <header>
      <h1>Page name: {pageName(activeMode)}</h1>
      <nav>
        {pagesArray.map((item) => (
          <HeaderButtom
            key={item.name}
            name={item.name}
            link={item.link}
            onClick={() => addActive(item.name)}
            activeMode={activeMode}
          />
        ))}
      </nav>
    </header>
  );
}

export default Header;
