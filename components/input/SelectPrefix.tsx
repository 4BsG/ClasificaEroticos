import { InputProps } from '.';
import { IoMdArrowDropdown } from 'react-icons/io';

const SelectPrefix: React.FC<InputProps> = prop => {
  const {} = prop;
  return (
    <div className="input-container px-2 py-3 w-16">
      <select className="select-phone">
        <option>+57</option>
        <option>+58</option>
      </select>
      <button className="icon-dropdown left-0">
        <IoMdArrowDropdown size={20} />
      </button>
    </div>
  );
};

export default SelectPrefix;
