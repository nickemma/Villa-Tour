import React from 'react';
import Link from 'next/link';

const Register = () => {
  return (
    <section className="register_container">
      <div className="register">
        <h2 className="title">Sign Up </h2>
        <form action="#">
          <div>
            <label htmlFor="name" className="form_label">
              First Name
            </label>
            <input
              type="name"
              name="name"
              id="first_name"
              className="form_input"
              placeholder="enter your name"
              required
            />
          </div>
          <div>
            <label htmlFor="name" className="form_label">
              Last Name
            </label>
            <input
              type="name"
              name="name"
              id="last_name"
              className="form_input"
              placeholder="enter your last name"
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
            Sign Up
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
