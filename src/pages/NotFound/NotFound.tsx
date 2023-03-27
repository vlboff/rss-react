import { Component } from 'react';
import { ReactComponent as SadFace } from '../../assets/sad-face.svg';

class NotFound extends Component<{ setPath: () => void }> {
  constructor(props: { setPath: () => void }) {
    super(props);
  }

  componentDidMount() {
    this.props.setPath();
  }

  render() {
    return (
      <main>
        <div className="not-found">
          <SadFace />
          <h2>Page not found</h2>
        </div>
      </main>
    );
  }
}

export default NotFound;
