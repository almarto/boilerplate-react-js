import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { CounterPage } from 'pages/counter'
import { Header } from 'layout/header'
import { HomePage } from 'pages/home'

const App = (
  <Router>
    <Header />
    <Switch>
      <Route path="/counter">
        <CounterPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  </Router>
)

export { App }
