import React, { useState, useEffect } from 'react';
import Form from '../../components/Form/Form';
import MoviesCardsField from '../../components/MoviesCardsField/MoviesCardsField';
import { validation } from '../../utils/utils';
import { ICardState } from '../../interfaces';

function Forms(props: { setPath: () => void }) {
  const [formData, setFormData] = useState({});
  useEffect(() => {
    props.setPath();
  }, []);

  return (
    <main>
      <Form setFormData={setFormData}></Form>
      <MoviesCardsField formData={formData}></MoviesCardsField>
    </main>
  );
}

export default Forms;
