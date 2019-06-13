
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'

export default class App extends React.Component {

  render () {
    return (
      <Switch>
        <Route path={'/'} exact component={Home} />
        <Route path={'/about'} exact component={About} />
      </Switch>
    )
  }
}
