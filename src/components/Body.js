import React from 'react'
import CounterContainer from './CounterContainer'

class Body extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.content}</p>
        <CounterContainer />
      </div>
    )
  }
}

export default Body
