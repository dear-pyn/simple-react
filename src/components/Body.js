import React from 'react'
import Counter from './Counter.js'

class Body extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.content}</p>
        <Counter />
      </div>
    )
  }
}

export default Body
