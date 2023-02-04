import Link from 'next/link';
import AuthenticationInput from '../components/input/AuthenticationInput';
import PasswordInput from '../components/input/PasswordInput';
import SearchInput from '../components/input/SearchInput';
import SelectCountry from '../components/input/SelectCountry';
import SelectInput from '../components/input/SelectInput';
import SelectPrefix from '../components/input/SelectPrefix';
import TextInput from '../components/input/TextInput';
import NumberInput from '../components/input/NumberInput';

function inputs() {
  return (
    <div className="p-4">
      <Link href={'/'}>
        <p className="btn btn-primary">Go back!</p>
      </Link>
      <div className="mt-4">
        <p className="mt-3 py-3">Search</p>
        <SearchInput />
        <p className="mt-3 py-3">Email</p>
        <TextInput />
        <p className="mt-3 py-3">Number</p>
        <NumberInput />
        <p className="mt-3 py-3">Password</p>
        <PasswordInput />
        <p className="mt-3 py-3">Select</p>
        <SelectInput />
        <p className="mt-3 py-3">Select prefix</p>
        <SelectPrefix />
        <p className="mt-3 py-3">Select country</p>
        <SelectCountry />
        <p className="mt-3 py-3">Authentication</p>
        <AuthenticationInput />
      </div>
    </div>
  );
}

export default inputs;
