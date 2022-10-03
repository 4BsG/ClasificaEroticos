import Image from 'next/image';
import HeaderSignIn from '../components/HeaderSignIn';
import LoginForm from '../components/LoginForm';

function login() {
  return (
    <>
      <HeaderSignIn />
      <div className="w-full h-52 flex justify-center items-center">
        <Image src="/img/logo.png" width={173} height={52} alt="Logo" />
      </div>
      <LoginForm />
    </>
  );
}

export default login;
