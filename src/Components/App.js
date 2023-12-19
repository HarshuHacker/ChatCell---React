import React from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../Actions/posts';
import PostsList from './PostsList';
import PropTypes from 'prop-types';
import Navbar from './Navbar';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { posts } = this.props;
    return (
      <div>
        <Navbar/>
        <PostsList posts={posts} />
      </div>
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
