import React, { Component } from 'react';

export class InputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: props.value, color: props.color};
  }
  componentWillReceiveProps(props){
    this.setState(props)
  }

  render() {
    return (
      <h2 style={{ color: '#' + this.state.color }}>{ 'Your name is: ' + this.state.value }</h2>
    );
  }
}