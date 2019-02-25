import React, { Component } from 'react';
import './Message.css';

export default class Message extends Component {
  render() {
    const { message } = this.props;
    return (
      <div className={"message"+(!message.displayPortraitLeft?" reverse":'')}>
        <div className="portrait">
          <img src="https://picsum.photos/300/300?image=1062" alt="imagem de avatar"/>
        </div>
        <div className="content">
          <div>
            <span>{message.userName}</span>
            <span>{message.time}</span>
          </div>
          <p>{message.message}</p>
        </div>
      </div>
    );
  }
}
