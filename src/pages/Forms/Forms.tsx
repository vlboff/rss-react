import React, { useState, useEffect } from 'react';
import Form from '../../components/Form/Form';
import MoviesCardsField from '../../components/MoviesCardsField/MoviesCardsField';
import { emptyFormState, IForm } from '../../interfaces';

function Forms(props: { setPath: () => void }) {
  const [formData, setFormData] = useState<IForm>(emptyFormState);
  const [lengthArray, setLengthArray] = useState(0);
  useEffect(() => {
    props.setPath();
  }, []);

  return (
    <main>
      <Form setFormData={setFormData} lengthArray={lengthArray}></Form>
      <MoviesCardsField formData={formData} setLengthArray={setLengthArray}></MoviesCardsField>
    </main>
  );
}

export default Forms;
