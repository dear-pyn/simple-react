import React from 'react'
import ClickStore from '../ClickStore.js'
import ClickActions from '../ClickActions.js'
import Counter from './Counter'

class CounterContainer extends React.Component {
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
      <Counter onClick={this.handleClick} counterValue={this.state.clickCount}/>
    )
  }
}

export default CounterContainer
