import React from 'react';
import { connect } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

import { fetchPosts } from '../Actions/posts';
import { authenticateUser } from '../Actions/auth';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());

    const token = localStorage.getItem('token');

    if (token) {
      const user = jwtDecode(token);

      console.log('user', user);
      this.props.dispatch(
        authenticateUser({
          email: user.email,
          _id: user._id,
          name: user.name,
        })
      );
    }
  }

  render() {
    return (
      <>
        <Outlet />
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

App.protoTypes = {
  posts: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(App);
