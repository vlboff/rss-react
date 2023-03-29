import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { IForm } from '../../../interfaces';

function InputSelect(props: { register: UseFormRegister<IForm>; errors: FieldErrors<IForm> }) {
  return (
    <div className="input-form">
      <label htmlFor="input-select" className="input-select">
        {' '}
        Select ganre:
        <select id="input-select" {...props.register('ganre', { required: true })}>
          <option value="" hidden>
            choose one:
          </option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Horror">Horror</option>
          <option value="Mystery">Mystery</option>
          <option value="Fantasy">Romance</option>
          <option value="Horror">Thriller</option>
          <option value="Mystery">Western</option>
        </select>
      </label>
      <p className={`invalid-form-text ${props.errors.ganre ? 'active' : ''}`}>*choose one genre</p>
    </div>
  );
}

export default InputSelect;
