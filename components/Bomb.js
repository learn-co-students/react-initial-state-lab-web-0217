import React from 'react'

const Bomb = React.createClass({
  getInitialState() {
    return {
      secondsLeft : this.props.initialCount
    };
  },
  render(){
    let time = this.state.secondsLeft
    let phrase = time > 0 ? `${time} seconds left before I go boom!` : 'Boom!'
    return (
      <div>
        {phrase}
      </div>
    )
  }
})

export default Bomb
