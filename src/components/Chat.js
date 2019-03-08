import React, { Component } from 'react';
import './Chat.css';
import Message from './Message';
import api from '../servicos/api';

export default class Chat extends Component {
  state = {
    messages: [
      {
        id: 0,
        userName: "John Doe",
        portrait: 'https://picsum.photos/300/300?image=1062',
        message: "orem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac commodo lorem. Aliquam tortor metus, porta vel ultrices vel, semper id lorem. Sed suscipit tortor lorem, vitae accumsan velit ullamcorper sed. Praesent quam lectus, volutpat sodales malesuada id, interdum non augue.",
        displayPortraitLeft: true,
        time: "32 mins ago"
      },
      {
        id: 1,
        userName: "John Doe",
        portrait: 'https://picsum.photos/300/300?image=1062',
        message: "orem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac commodo lorem. Aliquam tortor metus, porta vel ultrices vel, semper id lorem. Sed suscipit tortor lorem, vitae accumsan velit ullamcorper sed. Praesent quam lectus, volutpat sodales malesuada id, interdum non augue.",
        displayPortraitLeft: false,
        time: "28 mins ago"
      },
      {
        id: 2,
        userName: "John Doe",
        portrait: 'https://picsum.photos/300/300?image=1062',
        message: "orem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac commodo lorem. Aliquam tortor metus, porta vel ultrices vel, semper id lorem. Sed suscipit tortor lorem, vitae accumsan velit ullamcorper sed. Praesent quam lectus, volutpat sodales malesuada id, interdum non augue.",
        displayPortraitLeft: true,
        time: "10 mins ago"
      }
    ],
    userMessage: ''
  };
  async componentWillMount() {
    await api.get('messages').then((res) => {
      if(res.status === 200 && res.data.length > 0) {
        this.setState({ messages: res.data });
      }
    }).catch((res) => {
      console.log('Erro na requisição messages');
      console.log(res);  
    });
  }
  componentDidUpdate() {
    document.querySelector('.messages').scrollTo(0, 1000);
  }
  handleInputChange = (e) => {
    this.setState({ userMessage: e.target.value });
  };
  handleEnviar = async () => {
    let message = this.state.userMessage;
    let messages = this.state.messages;
    let id = messages.length;
    messages.push({
      id: id,
      userName: "Eu",
      portrait: '',
      message: message,
      displayPortraitLeft: true,
      time: "1 min ago",
    });
    this.setState({ userMessage: '', messages });
    document.querySelector('.messages').scrollTo(0, 1000);
    await api.post('messages', { message }).then((res) => {
      if(res.status === 201) {
        console.log('menssagem enviada.');
      }
    });
  };
  render() {
    return (
      <div className="Chat-container">
        <div className="title">
          <i className="far fa-comments"></i>
          <h2>Chat</h2>
        </div>
        <div className="chat">
          <div className="messages">
          { this.state.messages.map((message, index) => (
            <Message key={index} message={message}/>
          ))}
          </div>
          <div className="input-chat">
            <input 
              placeholder="Escreve sua menssagem aqui..."
              value={this.state.userMessage}
              onChange={this.handleInputChange}
            />
            <button onClick={this.handleEnviar}>Enviar</button>
          </div>
        </div>
      </div>
    );
  }
}