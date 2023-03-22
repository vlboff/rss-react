import React, { Component } from 'react';
import Form from '../../components/Form/Form';

class Forms extends Component<{ setPath: () => void }> {
  inputTitleRef: React.RefObject<HTMLInputElement>;
  constructor(props: { setPath: () => void }) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputTitleRef = React.createRef<HTMLInputElement>();
  }

  componentDidMount() {
    this.props.setPath();
    this.inputTitleRef.current?.focus();
  }

  handleSubmit(event: { preventDefault: () => void }) {
    console.log(this.inputTitleRef.current?.value);
    event.preventDefault();
  }

  render() {
    return (
      <main>
        <Form
          onSubmit={(event: { preventDefault: () => void }) => this.handleSubmit(event)}
          inputTitleRef={this.inputTitleRef}
        ></Form>
      </main>
    );
  }
}

export default Forms;
