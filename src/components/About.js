import React from 'react'
import { Link } from 'react-router-dom'

export default class extends React.Component {
  render () {
    return (
      <React.Fragment>
        <h1>About Page</h1>
        <div>
          <Link to="/">Home</Link>
        </div>
      </React.Fragment>
    )
  }
}
