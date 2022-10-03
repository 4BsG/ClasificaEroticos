import Link from 'next/link';
import React from 'react';

function HeaderSignIn() {
  return (
    <header className="mobile-header-container">
      <Link href={'/'}>
        <a className="ts-link btn-secondary px-3 py-1 rounded-xl">Sign In</a>
      </Link>
      <Link href={'/'}>
        <a className="ts-link">Continue As Guest 🠚</a>
      </Link>
    </header>
  );
}

export default HeaderSignIn;
