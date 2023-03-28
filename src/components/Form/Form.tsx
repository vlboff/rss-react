import React, { useEffect, useState } from 'react';
import InputTitle from '../UI/InputTitle/InputTitle';
import InputDate from '../UI/InputDate/InputDate';
import InputSelect from '../UI/InputSelect/InputSelect';
import InputPoster from '../UI/InputPoster/InputPoster';
import RadioField from '../RadioField/RadioField';
import InputAdult from '../UI/InputAdult/InputAdult';
import { IForm } from '../../interfaces';
import { useForm, SubmitHandler } from 'react-hook-form';

function Form(props: { setFormData: React.Dispatch<React.SetStateAction<object>> }) {
  const [data, setData] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();

  const onSubmit: SubmitHandler<IForm> = (data) => setData(data);

  useEffect(() => {
    props.setFormData(data);
  }, [data]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="inputs">
        <InputTitle register={register} errors={errors}></InputTitle>
        <InputPoster></InputPoster>
        <InputSelect></InputSelect>
        <InputDate></InputDate>
        <RadioField></RadioField>
        <InputAdult></InputAdult>
      </div>
      <div className="submit">
        <label htmlFor="input-submit">
          <input type="submit" value="submit" />
        </label>
      </div>
    </form>
  );
}

export default Form;
