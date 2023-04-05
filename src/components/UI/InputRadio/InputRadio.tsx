import { UseFormRegister } from 'react-hook-form';
import { IForm } from '../../../interfaces';

function InputRadio(props: { name: string; register: UseFormRegister<IForm> }) {
  return (
    <label htmlFor={props.name}>
      <input
        type="radio"
        id={props.name}
        value={props.name}
        {...props.register('status', { required: true })}
      />
      {props.name}
    </label>
  );
}

export default InputRadio;
