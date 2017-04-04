import React from 'react'

class Bomb extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: props.initialCount
    }
  }
  render() {
    const secChecker = (this.state.secondsLeft != 0)
    return (
      <div>
        {secChecker ? (
          `${this.state.secondsLeft} seconds left before I go boom!`
        ) : (
          'Boom!'
        )}
      </div>
    )
  }
}

module.exports = Bomb
