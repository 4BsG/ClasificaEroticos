import { AiOutlineMenu } from 'react-icons/ai';
import Image from 'next/image';

function NavMenuLogo() {
  return (
    <div className="flex items-center">
      <AiOutlineMenu size={22} />
      <div className="ml-3">
        <Image src="/img/logo.png" width={92.4} height={28} alt="Logo" />
      </div>
    </div>
  );
}

export default NavMenuLogo;
