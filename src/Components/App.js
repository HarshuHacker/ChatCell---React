import React from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../Actions/posts';
import PropTypes from 'prop-types';
import { PostsList, Navbar } from './';
import { Outlet } from 'react-router-dom';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { posts } = this.props;
    return (
      <>
        <Navbar />
        {/* <PostsList posts={posts} /> */}
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
