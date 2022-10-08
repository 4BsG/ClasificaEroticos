import { FiSearch } from 'react-icons/fi';

function SearchInput() {
  return (
    <div
      className="flex items-center
     bg-foreground rounded-xl border-2 border-color-border overflow-hidden"
    >
      <button className="pl-5 text-color-label">
        <FiSearch />
      </button>
      <input
        placeholder="Search here"
        className="bg-foreground outline-none p-3 w-full "
      />
    </div>
  );
}

export default SearchInput;
