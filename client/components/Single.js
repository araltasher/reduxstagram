import React, { Component } from 'react';
import Photo from './Photo';
import Comments from './Comments';

class Single extends Component {
  render() {
    //  We use the params from the React Router
    //  to see the code for the current photo
    const { postId } = this.props.params;
    const i = this.props.posts.findIndex((post) => post.code === postId);

    const post = this.props.posts[i];
    const postComments = this.props.comments[postId] || [];

    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comments postComments={postComments} />
      </div>
    );
  }
}

export default Single;
