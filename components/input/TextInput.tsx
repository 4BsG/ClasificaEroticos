import { useState } from 'react';
import { FaEyeSlash } from 'react-icons/fa';
import { InputProps } from '.';

const TextInput: React.FC<InputProps> = prop => {
  const {
    placeholder = 'Enter here',
    icon = 'icon-eyeslash',
    isPassword = true
  } = prop;
  const [watchPassword, setWatchPassword] = useState(false);

  const togglePassword = () => {
    setWatchPassword(!watchPassword);
  };
  return (
    <div className="input-container">
      <input
        type={watchPassword ? 'text' : 'password'}
        placeholder={placeholder}
        className={`input`}
      />
      {isPassword && (
        <button onClick={togglePassword} className={icon}>
          <FaEyeSlash size={22} />
        </button>
      )}
    </div>
  );
};

export default TextInput;
