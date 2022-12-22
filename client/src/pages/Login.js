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
  email: '',
  password: '',
};

const Login = () => {
  const [formValues, setFormValues] = useState(initialState);
  const { email, password } = formValues;

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
        <h3>User Login</h3>
        <MDBCardBody>
          <MDBValidation onSubmit={handleSubmit} noValidate className="row g-3">
            <div className="col-md-12">
              <MDBInput
                style={{
                  padding: '1rem',
                  fontSize: '1.4rem',
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
                  fontSize: '1.4rem',
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
                Login
              </MDBBtn>
            </div>
          </MDBValidation>
        </MDBCardBody>
        <MDBCardFooter>
          <Link to="/register">
            <p>Don't have an account? Register here</p>
          </Link>
        </MDBCardFooter>
      </MDBCard>
    </div>
  );
};

export default Login;
