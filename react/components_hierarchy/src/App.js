import React, { Component } from 'react';
import CommentBox from './components/CommentBox';
import EventGenerator from './components/EventGenerator';

class ReactDemo extends Component {
  constructor() {
    super();

    this.state = {
      eventNo: 0
    };

    this.btnText = 'Click me default';
    this.commentText = '';
    //this.handleBtnClick = this.handleBtnClick.bind(this);
  }

  //we can use arrow function or we can use bind(this) to pass current instance of the class.
  handleBtnClick() {
    this.btnText = 'Click me again';
    this.commentText = 'You clicked the button at ' + new Date().toString();

    //state value can not assign by this way. you can only reassign value via setState.
    //this.state.eventNo = 8;

    this.setState({
      eventNo: this.state.eventNo + 1
    });
  }
  render() {
    console.log('ReactDemo...');

    return (
      <div className="App">
        This is top component - App <br />
        <CommentBox comment={this.commentText} eventText={this.state.eventNo} />
        <EventGenerator
          text={this.btnText}
          handler={this.handleBtnClick.bind(this)}
        />
        {/*
       <EventGenerator text={this.btnText} handler={this.handleBtnClick.bind(this)} />
      */}
      </div>
    );
  }
}

//Task using state.
//you have to constructor
//assign click button text.. default (what you like).... btnText
//assign empty text to comment.....commentText
//Whenver i click on button then put counter and count and show it with date and time inside handleBtnClick method.

export default ReactDemo;
