import React, { Component } from 'react';
import './Chart.css';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import api from '../servicos/api';

export default class Chart extends Component {
  state = {
    pageViews: [
      { 
        month: 'Janeiro', 
        views: 100
      }, 
      { 
        month: 'Fevereiro',
        views: 200
      },
      { 
        month: 'Março',
        views: 150
      },
      { 
        month: 'Abril',
        views: 400
      },
      { 
        month: 'Maio',
        views: 300
      },
      { 
        month: 'junho',
        views: 250
      }
    ]
  };
  async componentWillMount() {
    await api.get('pageViews').then((res) => {
      if(res.status === 200 && res.data.length > 0) {
        this.setState({ pageViews: res.data});
      }
      this.setState({ pageViews: res.data});
    }).catch((res) => {
      console.log('Erro na requisição pageViews');
      console.log(res);   
    });
  }
  render() {
    return (
      <div className="Chart-container">
        <div className="title">
          <h2>Site Traffic Overview</h2>
        </div>
        <ResponsiveContainer className="chart" width='100%' height={300}>
          <LineChart data={this.state.pageViews}  margin={{top: 5, right: 50, left: 20, bottom: 5}}>
            <Line type="monotone" dataKey="views" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="month" />
            <YAxis />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
