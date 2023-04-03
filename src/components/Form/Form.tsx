/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import InputTitle from '../UI/InputTitle/InputTitle';
import InputDate from '../UI/InputDate/InputDate';
import InputSelect from '../UI/InputSelect/InputSelect';
import InputPoster from '../UI/InputPoster/InputPoster';
import RadioField from '../RadioField/RadioField';
import InputAdult from '../UI/InputAdult/InputAdult';
import { emptyFormState, IForm } from '../../interfaces';
import { useForm, SubmitHandler } from 'react-hook-form';

function Form(props: {
  setFormData: React.Dispatch<React.SetStateAction<IForm>>;
  lengthArray: number;
}) {
  const [data, setData] = useState<IForm>(emptyFormState);
  const [image, setImage] = useState<FileList | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IForm>();

  const onSubmit: SubmitHandler<IForm> = (data) => {
    setData(data);
  };

  useEffect(() => {
    props.setFormData({
      title: data.title,
      date: data.date,
      ganre: data.ganre,
      image: image,
      status: data.status,
      adult: data.adult,
    });
  }, [data]);

  useEffect(() => {
    if (props.lengthArray > 0) {
      alert('form submitted successfully');
      reset();
    }
  }, [props.lengthArray]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="inputs">
        <InputTitle register={register} errors={errors}></InputTitle>
        <InputPoster register={register} errors={errors} setImage={setImage}></InputPoster>
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
