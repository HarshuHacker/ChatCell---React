import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Navigate, redirect } from 'react-router-dom';

import { startSignup, signup, clearAuthState } from '../Actions/auth';

var props = undefined;

export async function action({ request }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  const { name, email, password, confirmPassword } = updates;
  if (email && password && confirmPassword && name) {
    props.dispatch(startSignup());
    props.dispatch(signup(email, password, confirmPassword, name));
  }
  return redirect('/');
}

class SignUp extends Component {
  componentWillUnmount() {
    this.props.dispatch(clearAuthState());
  }

  render() {
    const { inProgress, error, isLoggedin } = this.props.auth;

    props = this.props;
    return (
      <Form method="post" className="login-form">
        {isLoggedin && <Navigate to="/" />}
        <span className="login-signup-header"> Signup</span>
        {error && <div className="alert error-dailog">{error}</div>}
        <div className="field">
          <input name="name" placeholder="Name" type="text" required />
        </div>
        <div className="field">
          <input name="email" placeholder="Email" type="email" required />
        </div>
        <div className="field">
          <input
            name="password"
            placeholder="Password"
            type="password"
            required
          />
        </div>
        <div className="field">
          <input
            name="confirmPassword"
            placeholder="Confirm Password"
            type="password"
            required
          />
        </div>
        <div className="field">
          <button type="submit" disabled={inProgress}>
            Signup
          </button>
        </div>
      </Form>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps)(SignUp);
