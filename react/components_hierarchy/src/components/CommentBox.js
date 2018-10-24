import React, { Component } from 'react';

class CommentBox extends Component {
  render() {
    console.log('CommentBox...');
    return (
      <div>
        {this.props.comment} and {this.props.eventText}
      </div>
    );
  }
}

export default CommentBox;
