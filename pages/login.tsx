import Image from 'next/image';
import HeaderSignIn from '../components/HeaderSignIn';
import LoginForm from '../components/LoginForm';

function login() {
  return (
    <>
      <HeaderSignIn />
      <div className="w-full h-48 flex justify-center items-center">
        <Image src="/img/logo.png" width={172} height={52} alt="Logo" />
      </div>
      <LoginForm />
    </>
  );
}

export default login;
