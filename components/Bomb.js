import React from 'react'

export default class Bomb extends React.Component {
constructor(props){
  super();

  this.state = {
       secondsLeft: props.initialCount,
   };
}


render() {
  const sentence = " seconds left before I go boom!"
     return (
         <div>
           {this.state.secondsLeft === 0 ? 'Boom!' : this.state.secondsLeft + sentence}
         </div>
       );
   }

  //  render() {
  //      const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;
   //
  //      return (
  //        <div>{message}</div>
  //      );
  //    }


}


// In the components/Bomb.js file, create a Bomb React component.
// Its initial state should have a property secondsLeft.
// The initial value of secondsLeft is set by passing in a initialCount prop
// to the Bomb component.
// It should render the text '<SECONDS_LEFT> seconds left before I go boom!',
// where <SECONDS_LEFT> is the value of secondsLeft.
// If the secondsLeft is set to 0, it should render 'Boom!' instead.
