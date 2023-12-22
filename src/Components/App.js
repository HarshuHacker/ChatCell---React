import React from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../Actions/posts';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
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
