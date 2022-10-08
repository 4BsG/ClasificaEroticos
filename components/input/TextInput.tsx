import { FaEyeSlash } from 'react-icons/fa';

function TextInput() {
  return (
    <div
      className="flex items-center justify-between
     bg-foreground rounded-xl border-2 border-color-border  overflow-hidden"
    >
      <input type="text" className="bg-foreground outline-none p-3 w-full" />
      <button className="pr-3 text-color-label opacity-20">
        <FaEyeSlash size={22} />
      </button>
    </div>
  );
}

export default TextInput;
