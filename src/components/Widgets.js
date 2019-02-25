import React, { Component } from 'react';
import './Widgets.css';
import api from '../servicos/api';

export default class Widgets extends Component {
  state = {
    newOrders: 120,
    comments: 52,
    newUsers: 24,
    pageViews: 25200
  };
  async componentWillMount() {
    await api.get('widgets').then((res) => {
      console.log('deu');
      this.setState({res});
    }).catch((res) => {
      console.log('Erro na requisição widgets');
      console.log(res);
      this.setState({
        newOrders: 50,
        comments: 122,
        newUsers: 31,
        pageViews: 45800
      });  
    });
  }
  kFormat(n) {
    return n > 999 ? (n/1000).toFixed(1) + 'k' : n
  }
  render() {
    return (
      <div className="Widgets-container">
        <div className="widget">
          <div className="icon">
            <i className="fas fa-shopping-bag"></i>
          </div>
          <div className="texts">
            <p>{this.kFormat(this.state.newOrders)}</p>
            <p>Nem Orders</p>
          </div>
        </div>
        <div className="widget">
          <div className="icon">
            <i className="far fa-comment"></i>
          </div>
          <div className="texts">
            <p>{this.kFormat(this.state.comments)}</p>
            <p>Comments</p>
          </div>
        </div>
        <div className="widget">
          <div className="icon">
            <i className="far fa-user"></i>
          </div>
          <div className="texts">
            <p>{this.kFormat(this.state.newUsers)}</p>
            <p>Nem Users</p>
          </div>
        </div>
        <div className="widget">
          <div className="icon">
            <i className="far fa-newspaper"></i>
          </div>
          <div className="texts">
            <p>{this.kFormat(this.state.pageViews)}</p>
            <p>Page Views</p>
          </div>
        </div>
      </div>
    );
  }
}
