
import React from 'react'
import { connect } from 'react-redux'
import { dispatchClick } from './actions/test'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <button onClick={this.props.handleClick}>click me</button>
    )
  }
}

const mapDispatchToProps = {
  handleClick: dispatchClick
}

export default connect(null, mapDispatchToProps)(App)
