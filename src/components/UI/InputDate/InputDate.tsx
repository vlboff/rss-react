import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { IForm } from '../../../interfaces';

function InputDate(props: { register: UseFormRegister<IForm>; errors: FieldErrors<IForm> }) {
  return (
    <div className="input-form">
      <label htmlFor="input-date">
        Select release date
        <input
          type="date"
          id="input-date"
          min="1895-01-01"
          {...props.register('date', { required: true })}
        />
      </label>
      <div className={`invalid-form-text ${props.errors.date ? 'active' : ''}`}>
        <p>*set the date</p>
        <i className="small-font">release date cannot be earlier than 1895</i>
      </div>
    </div>
  );
}

export default InputDate;
