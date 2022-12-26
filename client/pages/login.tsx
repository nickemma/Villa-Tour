import React, { FormEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import store, { storeType } from '../redux/configureStore';
import { useSelector } from 'react-redux';
import { login } from '../redux/actions/user';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [pageLoaded, setPageLoaded] = useState<boolean>(false);

  const currentUser = useSelector((store: storeType) => store.currentUser);
  const loginStore = useSelector((store: storeType) => store.login);
  const router = useRouter();
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    store.dispatch(login(email, password));
  };

  useEffect(() => {
    if (currentUser.user) {
      router.replace('/');
      if (pageLoaded) {
        toast.success('Logged in Successfully');
      }
    }
  }, [currentUser]);

  useEffect(() => {
    if (loginStore.error && !loginStore.loading && pageLoaded) {
      toast.error(loginStore.error.message);
    }
    setLoading(loginStore.loading);
  }, [loginStore]);

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  return (
    <section className="login_container form_container">
      <div className="login form">
        <h2 className="title">Welcome Back</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="form_label">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="form_input"
              placeholder="Your email"
              value={email}
              onChange={(e) => {setEmail(e.target.value)}}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="form_label">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Your password"
              className="form_input"
              value={password}
              onChange={(e) => {setPassword(e.target.value)}}
              required
            />
          </div>
          <button type="submit" className="btn_submit">
            Sign in
          </button>
          <p className="text">
            Don’t have an account yet? <Link href="/register">Sign up</Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
