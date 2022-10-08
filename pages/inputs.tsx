import AuthenticationInput from '../components/input/AuthenticationInput';
import CheckInput from '../components/input/CheckInput';
import FilterInput from '../components/input/FilterInput';
import SearchInput from '../components/input/SearchInput';
import SelectInput from '../components/input/SelectInput';
import TextInput from '../components/input/TextInput';

function inputs() {
  return (
    <div className="mt-5 p-3 flex flex-col gap-3">
      <p>Search</p>
      <SearchInput />
      <p>Authentication</p>
      <AuthenticationInput />
      <p>check</p>
      <CheckInput />
      <p>text</p>
      <TextInput />
      <p>filter</p>
      <FilterInput />
      <p>Select</p>
      <SelectInput />
    </div>
  );
}

export default inputs;
