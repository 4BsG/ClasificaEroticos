import Link from 'next/link';
import React from 'react';

function NavBar() {
  return (
    <nav className="w-full flex justify-center">
      <menu className="w-smartPhone bg-purpleLight flex justify-between px-4 pt-4 pb-2">
        <Link href={'/register'}>
          <div className="border-2 border-fuchsiaSt text-fuchsiaSt px-4 py-2 rounded-generalRound cursor-pointer hover:bg-purpleDark">
            Register
          </div>
        </Link>
        <Link href={'/'}>
          <div className="flex items-center text-fuchsiaSt">
            <p className="cursor-pointer hover:text-fuchsiaHover">
              Continue As Guest
            </p>
            <span className="ml-3 cursor-pointer hover:text-fuchsiaHover">
              🠚
            </span>
          </div>
        </Link>
      </menu>
    </nav>
  );
}

export default NavBar;
