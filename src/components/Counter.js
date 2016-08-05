import React from 'react'
import './Counter.scss'

const Counter = ({onClick, counterValue}) => (
  <button className='button' onClick={onClick}>clicked {counterValue} times</button>
)

export default Counter
