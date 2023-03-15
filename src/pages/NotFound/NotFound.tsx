import { ReactComponent as SadFace } from '../../assets/sad-face.svg';

function NotFound() {
  return (
    <main>
      <div className="not-found">
        <SadFace />
        <h2>Page not found</h2>
        <h2>404</h2>
      </div>
    </main>
  );
}

export default NotFound;
