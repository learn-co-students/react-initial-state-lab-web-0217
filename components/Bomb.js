import React from 'react'

class Bomb extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }
  render() {
    return (
      <div>
      {this.state.secondsLeft ? <p> `${this.state.secondsLeft} seconds left before I go boom!`</p> : <p> Boom! </p>}
      </div>
    )
  }
}

module.exports = Bomb
