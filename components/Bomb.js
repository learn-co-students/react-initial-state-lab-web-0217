import React from 'react'

class Bomb extends React.Component {
	constructor(props) {
		super() 
		this.state = {
			secondsLeft: props.initialCount
		}
	}
	render() {
		const bombMessage = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`
		return(
			<div>{bombMessage}</div>
		)
	}
}

module.exports = Bomb