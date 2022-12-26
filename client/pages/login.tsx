import React from 'react';
import Link from 'next/link';

const Login = () => {
  return (
    <section className="login_container">
      <div className="login">
        <h2 className="title">Welcome Back</h2>
        <form action="#">
          <div>
            <label htmlFor="email" className="form_label">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="form_input"
              placeholder="your email"
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
              placeholder="••••••••"
              className="form_input"
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
