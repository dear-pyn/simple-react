import React from 'react'
import './Counter.scss'
import ClickStore from '../ClickStore.js'
import ClickActions from '../ClickActions.js'

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clickCount: ClickStore.getClickCount()
    }
  }

  componentDidMount() {
    ClickStore.addChangeListener(this.onChange)
  }

  componentWillUnmount() {
    ClickStore.removeChangeListener(this.onChange)
  }

  onChange = () => {
    this.setState({
      clickCount: ClickStore.getClickCount()
    })
  }

  handleClick = () => {
    ClickActions.increment()
  }

  render() {
    return (
      <button className='button' onClick={this.handleClick}>clicked {this.state.clickCount} times</button>
    )
  }
}

export default Counter
