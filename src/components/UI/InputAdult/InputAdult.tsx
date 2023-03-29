import { UseFormRegister } from 'react-hook-form';
import { IForm } from '../../../interfaces';

function InputAdult(props: { register: UseFormRegister<IForm> }) {
  return (
    <div className="input-form">
      <label htmlFor="input-adult" className="input-adult">
        <input type="checkbox" id="input-adult" {...props.register('adult')} />
        18+
      </label>
    </div>
  );
}

export default InputAdult;
