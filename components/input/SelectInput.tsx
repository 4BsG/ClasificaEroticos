import { InputProps } from '.';
import { IoMdArrowDropdown } from 'react-icons/io';

const SelectInput: React.FC<InputProps> = prop => {
  const {} = prop;
  return (
    <div className="input-container px-4 py-3">
      <select defaultValue="Choose" className="select-option text-color-label">
        <option>something</option>
        <option>something</option>
      </select>
      <button className="icon-dropdown right-0 pr-5 text-color-label">
        <IoMdArrowDropdown size={20} />
      </button>
    </div>
  );
};

export default SelectInput;
