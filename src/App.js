import React, { Component } from 'react';
import Home from './components/Home'
import About from './components/about'
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Home></Home>
        <About></About>
      </div>
    );
  }
}

export default App;
