import React, { useEffect, useState } from 'react';
import InputTitle from '../UI/InputTitle/InputTitle';
import InputDate from '../UI/InputDate/InputDate';
import InputSelect from '../UI/InputSelect/InputSelect';
import InputPoster from '../UI/InputPoster/InputPoster';
import RadioField from '../RadioField/RadioField';
import InputAdult from '../UI/InputAdult/InputAdult';
import { emptyFormState, IForm } from '../../interfaces';
import { useForm, SubmitHandler } from 'react-hook-form';

function Form(props: { setFormData: React.Dispatch<React.SetStateAction<IForm>> }) {
  const [data, setData] = useState<IForm>(emptyFormState);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IForm>();

  const onSubmit: SubmitHandler<IForm> = (data) => {
    console.log(data);
    setData(data);
    setValue('title', null);
    setValue('date', null);
    setValue('ganre', null);
    setValue('status', null);
    setValue('adult', false);
  };

  useEffect(() => {
    props.setFormData(data);
  }, [data]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="inputs">
        <InputTitle register={register} errors={errors}></InputTitle>
        <InputPoster register={register} errors={errors}></InputPoster>
        <InputSelect register={register} errors={errors}></InputSelect>
        <InputDate register={register} errors={errors}></InputDate>
        <RadioField register={register} errors={errors}></RadioField>
        <InputAdult register={register}></InputAdult>
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
