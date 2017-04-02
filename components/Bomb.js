import React from 'react'

class Bomb extends React.Component {
  constructor(props) {
    super();

    this.state = {
      secondsLeft: props.initialCount
    };
  }


  render() {
    let answer = this.state.secondsLeft > 0 ? `${this.state.secondsLeft} seconds left before I go boom!` : 'Boom!'
    return(
      <p>{answer}</p>
    );
  }
}

module.exports = Bomb
