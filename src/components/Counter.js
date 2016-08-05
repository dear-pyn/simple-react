import React from 'react'
import './Counter.scss'

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clickCount: 0
    }
  }

  handleClick = () => {
    this.setState({
      clickCount: this.state.clickCount + 1
    })
  }

  render() {
    return (
      <button className='button' onClick={this.handleClick}>clicked {this.state.clickCount} times</button>
    )
  }
}

export default Counter
