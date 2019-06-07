
import React from 'react'
import { connect } from 'react-redux'
import { dispatchClick, buttonClick } from './actions/test'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <React.Fragment>
        <button onClick={this.props.handleClick}>call api</button>
        <button onClick={this.props.lightItUp}>ligh it up</button>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = {
  handleClick: dispatchClick,
  lightItUp: buttonClick,
}

export default connect(null, mapDispatchToProps)(App)
