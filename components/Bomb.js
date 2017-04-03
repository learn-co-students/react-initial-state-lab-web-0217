import React from 'react';
import ReactDOM from 'react-dom';

class Bomb extends React.Component {
  constructor(props) {
    super()

    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {
    let message;
    if (this.state.secondsLeft === 0) {
      message = "Boom!"
    } else {
      message = `${this.state.secondsLeft} seconds left before I go boom!`
    }
    return (
      <div>{message}</div>
    )
  }
}

module.exports = Bomb
