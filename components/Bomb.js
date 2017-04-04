import React from 'react'

class Bomb extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  render() {
    const mes = this.state.secondsLeft > 0 ? `${this.state.secondsLeft} seconds left before I go boom!` : 'Boom!'
    return (
      <p>{mes}</p>
    )
  }
}

module.exports = Bomb;
