import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//containers
import Home from './container/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            Learn React
        </header>
        <Home />
      </div>
    );
  }
}

export default App;
