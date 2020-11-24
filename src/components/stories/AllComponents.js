import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Counter from '../Counter.js'
import '../../App.scss'
import Slider from '../Slider'

storiesOf('Counter', module)
  .add('simple Counter', () => (
    <div className='container'>
      <Counter onClick={action('clicked')} counterValue={999}  />
    </div>
  ));

const style = {
  padding: '2em 2px',
  width: '20em',
  display: 'inline-block'
}
storiesOf('Slider', module)
  .add('simple Slider', () => (
    <div className='container'>
      <div style={style}>
        <Slider />
      </div>
    </div>
  ));


import SliderInputRange from '../SliderInputRange'

storiesOf('SliderInputRange', module)
  .add('Input Range Slider', () => (
    <div className='container'>
      <SliderInputRange />
    </div>
  ))
