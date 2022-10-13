import { InputProps } from '.';

const SelectInput: React.FC<InputProps> = prop => {
  const { isPhoneCode = true } = prop;
  return (
    <div>
      {isPhoneCode ? (
        <select className="select-country">
          <option>Colombia</option>
          <option>Mexico</option>
        </select>
      ) : (
        <select className="select-phone">
          <option>+57</option>
          <option>+58</option>
        </select>
      )}
    </div>
  );
};

export default SelectInput;
