import { InputProps } from '.';

const AuthenticationInput: React.FC<InputProps> = prop => {
  const { type = 'text' } = prop;
  return <input type={type} className="input-auth" />;
};

export default AuthenticationInput;
