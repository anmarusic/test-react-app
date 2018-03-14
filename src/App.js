import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {

  constructor() {
    super();

    this.state = {
      color: ''
    }
  }

  componentDidMount() {
    this.getColor().then(result => this.setState({
      color: result[0].hex
    }))
  }

  getColor() {
    return fetch('http://www.colr.org/json/color/random')
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson.colors;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.color}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
