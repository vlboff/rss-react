import { useEffect } from 'react';
import { ReactComponent as SadFace } from '../../assets/sad-face.svg';

function NotFound(props: { setPath: () => void }) {
  useEffect(() => {
    props.setPath();
  }, []);

  return (
    <main>
      <div className="not-found">
        <SadFace />
        <h2>Page not found</h2>
      </div>
    </main>
  );
}

export default NotFound;
