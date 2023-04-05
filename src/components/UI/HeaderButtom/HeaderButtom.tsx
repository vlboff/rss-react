import { Link } from 'react-router-dom';

function HeaderButtom(props: {
  name: string;
  link: string;
  onClick: () => void;
  activeMode: string;
}) {
  const { name, link, onClick, activeMode } = props;
  return (
    <div className={`nav-links ${activeMode === name ? 'active' : ''}`}>
      <Link to={link} onClick={onClick}>
        <h3>{name}</h3>
      </Link>
    </div>
  );
}

export default HeaderButtom;
