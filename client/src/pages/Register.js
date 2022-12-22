import React, { useState } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBIcon,
  MDBBtn,
  MDBValidation,
  MDBInput,
  MDBSpinner,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const Register = () => {
  const [formValues, setFormValues] = useState(initialState);
  const { firstName, lastName, email, password, confirmPassword } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div
      style={{
        padding: '1rem',
        margin: 'auto',
        maxWidth: '400px',
        alignContent: 'center',
        marginTop: '7rem',
      }}
    >
      <MDBCard alignment="center">
        <MDBIcon fas icon="user-circle" size="3x" className="fa-2x" />
        <h3>User Register</h3>
        <MDBCardBody>
          <MDBValidation onSubmit={handleSubmit} noValidate className="row g-3">
            <div className="col-md-6">
              <MDBInput
                style={{
                  padding: '1rem',
                  fontSize: '1.2rem',
                  marginBottom: '1rem',
                }}
                label="First Name"
                name="firstName"
                type="text"
                value={firstName}
                onChange={handleChange}
                required
                validation="Please enter your first name"
              />
            </div>
            <div className="col-md-6">
              <MDBInput
                style={{
                  padding: '1rem',
                  fontSize: '1.2rem',
                  marginBottom: '1rem',
                }}
                label="Last Name"
                name="lastName"
                type="text"
                value={lastName}
                onChange={handleChange}
                required
                validation="Please enter your last name"
              />
            </div>
            <div className="col-md-12">
              <MDBInput
                style={{
                  padding: '1rem',
                  fontSize: '1.2rem',
                  marginBottom: '1rem',
                }}
                label="Email"
                name="email"
                type="email"
                value={email}
                onChange={handleChange}
                required
                validation="Please enter a valid email"
              />
            </div>
            <div className="col-md-12">
              <MDBInput
                style={{
                  padding: '1rem',
                  marginBottom: '1rem',
                  fontSize: '1.2rem',
                }}
                label="Password"
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                required
                invalid
                validation="Please enter a valid password"
              />
            </div>
            <div className="col-md-12">
              <MDBInput
                style={{
                  padding: '1rem',
                  marginBottom: '1rem',
                  fontSize: '1.2rem',
                }}
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleChange}
                required
                invalid
                validation="passwords do not match"
              />
            </div>
            <div className="col-12">
              <MDBBtn
                type="submit"
                style={{
                  width: '100%',
                  fontSize: '1.7rem',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                className="mt-2"
              >
                Sign Up
              </MDBBtn>
            </div>
          </MDBValidation>
        </MDBCardBody>
        <MDBCardFooter>
          <Link to="/login">
            <p>Already have an account? Login</p>
          </Link>
        </MDBCardFooter>
      </MDBCard>
    </div>
  );
};

export default Register;
