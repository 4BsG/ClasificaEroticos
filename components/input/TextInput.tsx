import { FaEyeSlash } from 'react-icons/fa';
import { InputProps } from '.';

const TextInput: React.FC<InputProps> = prop => {
  const {
    placeholder = 'Enter here',
    icon = 'icon-eyeslash',
    type = 'password',
    isPassword = true
  } = prop;

  return (
    <div className="input-container">
      <input type={type} placeholder={placeholder} className={`input`} />
      {isPassword && (
        <button className={icon}>
          <FaEyeSlash size={22} />
        </button>
      )}
    </div>
  );
};

export default TextInput;
