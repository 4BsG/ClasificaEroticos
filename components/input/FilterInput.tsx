import { BiFilterAlt } from 'react-icons/bi';

function FilterInput() {
  return (
    <div className="flex items-center justify-center bg-foreground w-12 h-12 rounded-xl text-color-text">
      <button>
        <BiFilterAlt size={20} />
      </button>
    </div>
  );
}

export default FilterInput;
