import React, { useEffect } from 'react';
import Form from '../../components/Form/Form';
import MoviesCardsField from '../../components/MoviesCardsField/MoviesCardsField';

function Forms(props: { setPath: () => void }) {
  useEffect(() => {
    props.setPath();
  }, [props]);

  return (
    <main>
      <Form></Form>
      <MoviesCardsField></MoviesCardsField>
    </main>
  );
}

export default Forms;
