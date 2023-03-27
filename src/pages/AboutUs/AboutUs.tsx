import { Component } from 'react';

class AboutUs extends Component<{ setPath: () => void }> {
  constructor(props: { setPath: () => void }) {
    super(props);
  }

  componentDidMount() {
    this.props.setPath();
  }

  render() {
    return (
      <main>
        <p data-testid="about-us">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </main>
    );
  }
}

export default AboutUs;
