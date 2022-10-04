import Link from 'next/link';
import React from 'react';

function HeaderSignIn() {
  return (
    <header className="mobile-header-container">
      <Link href={'/'}>
        <a className="ts-link  text-xs btn-secondary px-5 py-2 rounded-xl">
          Sign In
        </a>
      </Link>
      <Link href={'/'}>
        <a className="ts-link text-xs ">Continue As Guest 🠚</a>
      </Link>
    </header>
  );
}

export default HeaderSignIn;
