import { InputProps } from '.';

const SelectCountry: React.FC<InputProps> = prop => {
  const {} = prop;
  return (
    <div>
      <select className="select-country">
        <option>Colombia</option>
        <option>Mexico</option>
      </select>
    </div>
  );
};

export default SelectCountry;
