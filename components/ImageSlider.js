// const React = require('react')
import React from 'react'

class ImageSlider extends React.Component {
  constructor(props) {
    super()

    this.state = {
      currentSlideIndex: 0
    }
  }

  render() {
    return(
       <div className="slide-index">I am on slide {this.state.currentSlideIndex}</div>
    )
  }
}

export default ImageSlider

// module.exports = ImageSlider
