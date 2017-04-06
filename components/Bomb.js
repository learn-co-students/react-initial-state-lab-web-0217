import React from 'react';

export default class Bomb extends React.Component {
  constructor(myProps) {
    super()
    this.state = {secondsLeft: myProps.initialCount}
  }
  render() {
    return (
      <div className="time-left">{this.state.secondsLeft === 0 ? "Boom!" :
                    `${this.state.secondsLeft} seconds left before I go boom!`}</div>
    )
  }
}
