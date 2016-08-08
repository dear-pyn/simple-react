import React from 'react'
import styles from './styles.scss'

const MIN_VALUE = 0
const MAX_VALUE = 1000
const MIN_COMPUTED_VALUE = 0
const MAX_COMPUTED_VALUE = 10

class SliderInputRange  extends React.Component {
  state = {
    value: 50
  }

  onChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  onMouseUp = (e) => {
    const currentValue = e.target.value
    const roundedValue = roundValue(currentValue, {
      min: MIN_VALUE,
      max: MAX_VALUE,
      minComputed: MIN_COMPUTED_VALUE,
      maxComputed: MAX_COMPUTED_VALUE
    })

    this.setState({
      value: roundedValue
    })
  }

  render() {
    return (
      <div>
        <p>{roundValue(this.state.value, {
          min: MIN_VALUE,
          max: MAX_VALUE,
          minComputed: MIN_COMPUTED_VALUE,
          maxComputed: MAX_COMPUTED_VALUE
        }) * (MAX_COMPUTED_VALUE - MIN_COMPUTED_VALUE) / (MAX_VALUE - MIN_VALUE)}</p>
        <input
        className='slider'
        type='range'
        min={MIN_VALUE}
        max={MAX_VALUE}
        onChange={this.onChange}
        onMouseUp={this.onMouseUp}
        value={this.state.value}/>
      </div>
    )
  }
}

function roundValue(value, { min, max, minComputed, maxComputed }) {
  const range = maxComputed - minComputed
  const rangeValue = (max - min) / range
  const baseValue = Math.floor(value / rangeValue) * rangeValue
  const offset = value % rangeValue
  const roundedValue = baseValue + (offset > rangeValue / 2 ? rangeValue : 0)
  console.log(`value: ${value}, baseValue: ${baseValue}, offset: ${offset}, rangeValue: ${rangeValue}`)
  console.log(roundedValue)
  return roundedValue
}

export default SliderInputRange
