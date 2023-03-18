import { Component, ReactNode } from 'react';
import HeaderButtom from '../UI/HeaderButtom/HeaderButtom';

enum namePage {
  home = 'Home',
  about = 'About us',
  notFound = '404',
}

class Header extends Component<{ path: string }, { activeMode: string }> {
  constructor(props: { path: string }) {
    super(props);
    this.state = {
      activeMode: localStorage.getItem('pageName') || namePage.home,
    };
  }

  addActive = (name: string) => {
    localStorage.setItem('pageName', name);
    this.setState({ activeMode: name });
  };

  pageName = (name: string) => {
    if (name === namePage.home) {
      return this.props.path !== '#/' && this.props.path !== '#/about'
        ? namePage.notFound
        : namePage.home;
    } else if (name === namePage.about) {
      return this.props.path !== '#/' && this.props.path !== '#/about'
        ? namePage.notFound
        : namePage.about;
    }
  };

  render(): ReactNode {
    return (
      <header>
        <h1>Page name: {this.pageName(this.state.activeMode)}</h1>
        <nav>
          <HeaderButtom
            name={namePage.home}
            link={'/'}
            onClick={() => this.addActive(namePage.home)}
            activeMode={this.state.activeMode}
          />
          <HeaderButtom
            name={namePage.about}
            link={'/about'}
            onClick={() => this.addActive(namePage.about)}
            activeMode={this.state.activeMode}
          />
        </nav>
      </header>
    );
  }
}

export default Header;
