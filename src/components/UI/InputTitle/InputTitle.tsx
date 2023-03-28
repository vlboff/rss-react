import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { IForm } from '../../../interfaces';

function InputTitle(props: { register: UseFormRegister<IForm>; errors: FieldErrors<IForm> }) {
  return (
    <div className="input-form">
      <label htmlFor="input-title">
        Title:
        <input
          type="text"
          id="input-title"
          placeholder="movie title"
          {...props.register('title', { required: true })}
        />
      </label>
      <p className={`invalid-form-text ${props.errors.title ? 'active' : ''}`}>*add title</p>
    </div>
  );
}

export default InputTitle;
