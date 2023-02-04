import { FiSearch } from 'react-icons/fi';
import { InputProps } from '.';

const SearchInput: React.FC<InputProps> = prop => {
  const { placeholder = 'Search here', action } = prop;
  return (
    <div className="input-container">
      <input placeholder={placeholder} className="input-search" />
      <button onClick={action} className="icon-search">
        <FiSearch />
      </button>
    </div>
  );
};

export default SearchInput;
