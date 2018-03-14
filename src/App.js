import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { InputComponent } from './input-component/input-component'



class App extends Component {

  constructor() {
    super();

    this.state = {
      color: '',
      value: ''
    }


    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event) {
    this.setState({value: event.target.value});
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
    let c = this.state.color
    let v = this.state.value
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <InputComponent color={c} value={v} />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <label>
        Name:
        <input type="text" value={this.state.value} onChange={this.handleChange} />
      </label>
      </div>
    );
  }
}

export default App;
