import React from 'react'

const ImageSlider = React.createClass({
  getInitialState(){
    return {
      currentSlideIndex: 0
    }
  },
  render(){
    return (
      <div>I am on slide {this.state.currentSlideIndex}</div>
    )
  }
})

export default ImageSlider
