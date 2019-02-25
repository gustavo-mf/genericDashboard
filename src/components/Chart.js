import React, { Component } from 'react';
import './Chart.css';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import api from '../servicos/api';

export default class Chart extends Component {
  state = {
    pageViews: [
      { 
        month: 'Janeiro', 
        value: 100
      }, 
      { 
        month: 'Fevereiro',
        value: 200
      },
      { 
        month: 'Março',
        value: 150
      },
      { 
        month: 'Abril',
        value: 400
      },
      { 
        month: 'Maio',
        value: 300
      },
      { 
        month: 'junho',
        value: 250
      }
    ]
  };
  async componentWillMount() {
    await api.get('pageViews').then((res) => {
      console.log('deu');
      this.setState({ pageViews: res});
    }).catch((res) => {
      console.log('Erro na requisição pageViews');
      console.log(res);
      this.setState({
        pageViews: [
          { 
            month: 'Janeiro', 
            value: 300
          }, 
          { 
            month: 'Fevereiro',
            value: 400
          },
          { 
            month: 'Março',
            value: 150
          },
          { 
            month: 'Abril',
            value: 200
          },
          { 
            month: 'Maio',
            value: 100
          },
          { 
            month: 'junho',
            value: 550
          }
        ]
      });   
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
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="month" />
            <YAxis />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
