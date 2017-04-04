import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsLeft: `${props.initialCount}`,
    }
  }

  render() {

    return (
      <div className="slide">{this.state.secondsLeft==0? "Boom!" : `${this.state.secondsLeft} seconds left before I go boom!`}</div>
    );
  }
}

module.exports = Bomb
