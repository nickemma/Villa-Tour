import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import store, { storeType } from '../../redux/configureStore';
import { useRouter } from 'next/router';
import { logout } from '../../redux/actions/user';
import { toast } from 'react-toastify';
import Image from 'next/image';

const data = [
  {
    name: 'Home',
    route: '/',
  },
  {
    name: 'Add Tour',
    route: '/tours/create',
    protected: true,
  },
  {
    name: 'Dashboard',
    route: '/dashboard',
    protected: true,
  },
];

const Header = () => {
  const currentUser = useSelector((store: storeType) => store.currentUser);
  const router = useRouter();

  const handleSession = () => {
    if (!currentUser.user) {
      router.push('/login');
      return;
    }
    store.dispatch(logout());
    toast.success('Logged out successfully');
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">Villa Tour</div>
        <ul className="nav_links">
          {data.map((link, index) => (
            <li key={index} className="nav_item">
              <Link href={link.route}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <div>
          {currentUser.user && (
            <Image
              src={currentUser.user.user.avatar}
              width={50}
              height={50}
              alt="avatar"
            />
          )}
        </div>
        <button onClick={handleSession}>
          {currentUser.user ? 'Log Out' : 'Log In'}
        </button>
      </nav>
    </header>
  );
};

export default Header;
