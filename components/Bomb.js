import React from 'react'

class Bomb extends React.Component {
	constructor(element) {
		super()
		this.state = {
			secondsLeft: element.initialCount
		}
	}

	render(){
		if (this.state.secondsLeft === 0) {
			return (
			<div>
				<p>Boom!</p>
			</div>
			)
		} else {
			return (
			<div>
				<p>{this.state.secondsLeft} seconds left before I go boom!</p>
			</div>
			)
		}
	}
}

module.exports = Bomb