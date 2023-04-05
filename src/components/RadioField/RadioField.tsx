import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { radioButton, IForm } from '../../interfaces';
import InputRadio from '../UI/InputRadio/InputRadio';

function RadioField(props: { register: UseFormRegister<IForm>; errors: FieldErrors<IForm> }) {
  const radioButtonArr = [
    { name: radioButton.rumored },
    { name: radioButton.planned },
    { name: radioButton.inProduction },
    { name: radioButton.postProduction },
    { name: radioButton.released },
  ];

  return (
    <div className="input-form">
      <p>Status:</p>
      <div className="input-form-radio">
        {radioButtonArr.map((item) => (
          <InputRadio
            key={`${item.name}${Math.random()}`}
            name={item.name}
            register={props.register}
          ></InputRadio>
        ))}
      </div>
      <p className={`invalid-form-text ${props.errors.status ? 'active' : ''}`}>*choose status</p>
    </div>
  );
}

export default RadioField;
