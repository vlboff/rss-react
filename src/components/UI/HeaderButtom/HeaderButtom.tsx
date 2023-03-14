import { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderButtom extends Component<{
  name: string;
  link: string;
  onClick: () => void;
  activeMode: string;
}> {
  constructor(props: { name: string; link: string; onClick: () => void; activeMode: string }) {
    super(props);
  }

  render() {
    const { name, link, onClick, activeMode } = this.props;
    return (
      <div className={`nav-links ${activeMode === name ? 'active' : ''}`}>
        <Link to={link} onClick={onClick}>
          {name}
        </Link>
      </div>
    );
  }
}

export default HeaderButtom;
