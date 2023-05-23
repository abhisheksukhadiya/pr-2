import React, { Component } from 'react'

export default class Classbaseclock extends Component {
  constructor() {
    super();
    this.state = {
      time: new Date().toLocaleTimeString()
    }
  }

  componentDidMount() {
    this.interval = setInterval(() =>
      this.updateClock(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  updateClock() {
    this.setState({
      time: new Date().toLocaleTimeString()
    });
  }

  render() {
    return (
      <div>
        <center>
          <h1>
            {this.state.time}
          </h1>
        </center>
      </div>
    )
  }
}