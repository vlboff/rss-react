import { Component, ReactNode } from 'react';
import HeaderButtom from '../UI/HeaderButtom/HeaderButtom';

class Header extends Component<object, { activeMode: string }> {
  state = {
    activeMode: 'Home',
  };

  addActive = (name: string) => {
    this.setState({ activeMode: name });
  };

  render(): ReactNode {
    return (
      <header>
        <HeaderButtom
          name={'Home'}
          link={'/'}
          onClick={() => this.addActive('Home')}
          activeMode={this.state.activeMode}
        />
        <HeaderButtom
          name={'About us'}
          link={'/about'}
          onClick={() => this.addActive('About us')}
          activeMode={this.state.activeMode}
        />
      </header>
    );
  }
}

export default Header;
