import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import store, { storeType } from '../../redux/configureStore';
import { useRouter } from 'next/router';
import { logout } from '../../redux/actions/user';
import { toast } from 'react-toastify';

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
];

const Header = () => {
  const currentUser = useSelector((store: storeType) => store.currentUser);
  const router = useRouter();

  const handleSession = () => {
    // redirect to login page
    if (!currentUser.user) {
      router.push('/login');
      return;
    }
    store.dispatch(logout());
    toast.success('Logged out successfully');
  };

  return (
    <header>
      <nav>
        <div className="logo">Villa Tour</div>
        <ul className="nav_links">
          {data.map((link, index) => (
            <li key={index}>
              <Link
                href={
                  !link.protected
                    ? link.route
                    : currentUser.user
                    ? link.route
                    : '/login'
                }
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div>
          {currentUser.user && (
            <h3>logged in as {currentUser.user.user.name}</h3>
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
