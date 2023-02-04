import { InputProps } from '.';

const CheckInput: React.FC<InputProps> = prop => {
  const { type = 'checkbox' } = prop;
  return <input type={type} className="accent-primary " />;
};

export default CheckInput;
