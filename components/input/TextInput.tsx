import { InputProps } from '.';

const TextInput: React.FC<InputProps> = prop => {
  const { placeholder = 'email@mail.com', type = 'email', value, onChange } = prop;

  return (
    <div className="input-container">
      <input type={type} placeholder={placeholder} className={`input`} value={value} onChange={onChange} />
    </div>
  );
};

export default TextInput;
