import { UPDATE_POSTS } from "./ActionTypes";

export function fetchPosts() {
  return (dispatch) => {
    const url =
      'https://codeial.codingninjas.com:8000/api/v2/posts?page=1&limit=50000';
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        dispatch(updatePosts(data.data.posts))
      });
  };
}

export function updatePosts(posts) {
  return {
    type: UPDATE_POSTS,
    posts,
  };
}
