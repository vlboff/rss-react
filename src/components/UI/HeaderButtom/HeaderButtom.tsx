import { Link } from 'react-router-dom';

function HeaderButtom(props: { name: string; link: string }) {
  return (
    <div>
      <Link to={props.link}>{props.name}</Link>
    </div>
  );
}

export default HeaderButtom;
