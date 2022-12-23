import Link from 'next/link';
import React from 'react';
const NAV_LINKS = [
  {
    path: '/',
    display: 'Home',
  },
  {
    path: '/login',
    display: 'Login',
  },
  {
    path: '/register',
    display: 'Register',
  },
];

const Header = () => {
  return (
    <div>
      <ul>
        {NAV_LINKS.map((items, index) => (
          <li key={index}>
            <Link href={items.path}>{items.display}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
