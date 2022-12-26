import React, { FormEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import store, { storeType } from '../redux/configureStore';
import { register } from '../redux/actions/user';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

const Register = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [pageLoaded, setPageLoaded] = useState<boolean>(false);

  const currentUser = useSelector((store: storeType) => store.currentUser);
  const registerStore = useSelector((store: storeType) => store.register);
  const router = useRouter();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const formData = { firstName, lastName, email, password };
    store.dispatch(register(formData));
  };

  useEffect(() => {
    if (currentUser.user) {
      router.replace('/');
      if (pageLoaded) {
        toast.success('Signed up Successfully');
      }
    }
  }, [currentUser]);

  useEffect(() => {
    if (registerStore.error && !registerStore.loading && pageLoaded) {
      toast.error(registerStore.error.message);
    }
    setLoading(registerStore.loading);
  }, [registerStore]);

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  return (
    <section className="register_container">
      <div className="register">
        <h2 className="title">Sign Up </h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="form_label">
              First Name
            </label>
            <input
              name="name"
              id="first_name"
              className="form_input"
              placeholder="First name"
              value={firstName}
              onChange={(e) => {setFirstName(e.target.value)}}
              required
            />
          </div>
          <div>
            <label htmlFor="name" className="form_label">
              Last Name
            </label>
            <input
              name="name"
              id="last_name"
              className="form_input"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => {setLastName(e.target.value)}}
              required
            />
          </div>
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
          <button type="submit" className="btn_submit" disabled={loading}>
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
          <p className="text">
            Already have an account? <Link href="/login">Sign In</Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Register;
