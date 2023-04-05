import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { IForm } from '../../../interfaces';

function InputPoster(props: {
  register: UseFormRegister<IForm>;
  errors: FieldErrors<IForm>;
  setImage: React.Dispatch<React.SetStateAction<FileList | null>>;
}) {
  return (
    <div className="input-form">
      <label htmlFor="input-poster" className="input-poster">
        Add poster:
        <input
          type="file"
          id="input-poster"
          accept=".png, .jpg, .jpeg"
          {...props.register('image', { required: true })}
          onChange={(e) => props.setImage(e.currentTarget.files)}
        />
        <div>download image</div>
      </label>
      <p className={`invalid-form-text ${props.errors.image ? 'active' : ''}`}>
        *upload some image
      </p>
    </div>
  );
}

export default InputPoster;
