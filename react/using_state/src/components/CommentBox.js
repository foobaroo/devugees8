import React, { Component } from 'react';

class CommentBox extends Component {
  render() {
    console.log('CommentBox...');
    return <div>{this.props.comment}</div>;
  }
}

export default CommentBox;
