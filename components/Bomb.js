const React = require('react')

class Bomb extends React.Component {

  constructor(props) {
    super();
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {
    let countdownMsg = (this.state.secondsLeft == 0) ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`
    return (
      <div className="countDownArea">
        {countdownMsg}
      </div>
    )
  }
}

module.exports = Bomb
