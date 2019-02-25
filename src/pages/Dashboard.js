import React, { Component } from 'react';
import './Dashboard.css';
import Widgets from '../components/Widgets';
import Chart from '../components/Chart';
import Chat from '../components/Chat';

class App extends Component {
  render() {
    return (
      <div className="dashboard-container">
        <h1 className="page-title">Dashboard</h1>
        <Widgets/>
        <Chart/>
        <Chat/>
      </div>
    );
  }
}

export default App;
