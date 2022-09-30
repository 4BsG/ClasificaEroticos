import Link from 'next/link';
import React from 'react';

function NavBar() {
  return (
    <nav className="w-full flex justify-center">
      <menu className="w-smartPhone bg-purpleLight flex justify-between">
        <Link href={'/register'}>
          <div className="ml-4">Register</div>
        </Link>
        <Link href={'/'}>
          <div className="mr-4">
            Home
            <span>🠚</span>
          </div>
        </Link>
      </menu>
    </nav>
  );
}

export default NavBar;
