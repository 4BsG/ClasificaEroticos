import { InputProps } from '.';

const NumberInput: React.FC<InputProps> = prop => {
  const { placeholder = '000-000000', type = 'number' } = prop;

  return (
    <div className="input-container">
      <input placeholder={placeholder} type={type} className={`input`} />
    </div>
  );
};

export default NumberInput;
