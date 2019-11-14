import React from 'react'

import { Counter } from 'app/counter/components/counter'
import { Header } from 'layout/header'

const Home = () => (
  <div className="Home">
    <Header />
    <Counter />
  </div>
)

export { Home }
