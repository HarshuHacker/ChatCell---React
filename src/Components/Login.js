import React from 'react';
import { Form, Navigate, redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { clearAuthState, login } from '../Actions/auth';

var props = undefined;

export async function action({ request }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  const { email, password } = updates;
  if (email && password) {
    props.dispatch(login(email, password));
  }
  return redirect('/');
}

class Login extends React.Component {
  componentWillUnmount() {
    this.props.dispatch(clearAuthState());
  }

  render() {
    const { error, inProgress, isLoggedin } = this.props.auth;

    props = this.props;

    return (
      <Form method="post" className="login-form">
        {isLoggedin && <Navigate to="/" />}
        <span className="login-signup-header">Log In</span>
        {error && <div className="alert error-dailog">{error}</div>}
        <div className="field">
          <input name="email" type="email" placeholder="Email" required />
        </div>
        <div className="field">
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <div className="field">
          {inProgress ? (
            <button disabled>Logging in...</button>
          ) : (
            <button type="submit">Log In</button>
          )}
        </div>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}
export default connect(mapStateToProps)(Login);
