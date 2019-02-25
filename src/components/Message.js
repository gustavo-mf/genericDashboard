import React, { Component } from 'react';
import './Message.css';

export default class Message extends Component {
  handleImg(message) {
    if(message.userName === "Eu") {
      return '';
    } else {
      return "";
    }
  }
  render() {
    const { message } = this.props;
    return (
      <div className={"message"+(!message.displayPortraitLeft?" reverse":'')}>
        <div className="portrait">
          {message.userName === "Eu"? 
            <div className="userAvatar"></div>
          :<img src={message.img?message.img:"https://picsum.photos/300/300?image=1062"} alt="Avatar"/>}
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
