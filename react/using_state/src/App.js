import React, { Component } from 'react';
import CommentBox from './components/CommentBox';
import EventGenerator from './components/EventGenerator';

class ReactDemo extends Component {
  constructor() {
    super();
    this.state = {
      eventNo: 0
    };

    this.btnText = 'Click me';
    this.commentText = '';
    //this.handleBtnClick = this.handleBtnClick.bind(this);
  }

  handleBtnClick() {
    this.btnText = 'Click Me Again';

    this.commentText = 'You clicked the button at ' + new Date().toString();

    this.setState({
      eventNo: this.state.eventNo++
    });
  }
  render() {
    console.log('ReactDemo...');

    return (
      <div className="App">
        This is top component - App <br />
        <CommentBox comment={this.commentText} />
        <EventGenerator
          text={this.btnText}
          handler={this.handleBtnClick.bind(this)}
        />
      </div>
    );
  }
}

export default ReactDemo;
