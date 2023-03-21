import { Component, ReactNode } from 'react';
import HeaderButtom from '../UI/HeaderButtom/HeaderButtom';
import { pagePath, namePage } from '../../interfaces';

const pagesPathArray = [pagePath.home, pagePath.about, pagePath.forms];
const pagesArray = [
  { name: namePage.home, link: '/' },
  { name: namePage.about, link: '/about' },
  { name: namePage.forms, link: '/forms' },
];

class Header extends Component<{ path: string }, { activeMode: string }> {
  constructor(props: { path: string }) {
    super(props);
    this.state = {
      activeMode: sessionStorage.getItem('pageName') || namePage.home,
    };
  }

  addActive = (name: string) => {
    sessionStorage.setItem('pageName', name);
    this.setState({ activeMode: name });
  };

  pageName = (name: string) => {
    const path = this.props.path;
    const currentPage = pagesArray.find((item) => item.name === name);
    if (currentPage?.name) {
      return path && pagesPathArray.every((i) => i !== path) ? namePage.notFound : currentPage.name;
    }
  };

  render(): ReactNode {
    return (
      <header>
        <h1>Page name: {this.pageName(this.state.activeMode)}</h1>
        <nav>
          {pagesArray.map((item) => (
            <HeaderButtom
              key={item.name}
              name={item.name}
              link={item.link}
              onClick={() => this.addActive(item.name)}
              activeMode={this.state.activeMode}
            />
          ))}
        </nav>
      </header>
    );
  }
}

export default Header;
