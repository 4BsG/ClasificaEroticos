import Image from 'next/image';
import HeaderSignIn from '../components/HeaderSignIn';
import RegisterForm from '../components/RegisterForm';

function register() {
  return (
    <>
      <HeaderSignIn />
      <div className="w-full h-28 flex justify-center items-center">
        <Image src="/img/logo.png" width={172} height={52} alt="Logo" />
      </div>
      <RegisterForm />
    </>
  );
}

export default register;
