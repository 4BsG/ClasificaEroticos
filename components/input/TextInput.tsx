import { InputProps } from '.';

const TextInput: React.FC<InputProps> = prop => {
  const { placeholder = 'email@mail.com', type = 'email' } = prop;

  return (
    <div className="input-container">
      <input type={type} placeholder={placeholder} className={`input`} />
    </div>
  );
};

export default TextInput;
