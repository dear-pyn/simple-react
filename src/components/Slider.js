import React from 'react'
import RcSlider from 'rc-slider'
import 'rc-slider/assets/index.css'

function createMarks() {
  let object = {}
  for(let i = 0 ; i<=10; i++) {
    object[i] = i
  }

  return object
}

const sliderOptions = {
  step: 1,
  min: 0,
  max: 10,
  dots: true,
  marks: createMarks()
}

const Slider = () => (
  <RcSlider {...sliderOptions}/>
)

export default Slider
