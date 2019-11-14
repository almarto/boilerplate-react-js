import React, { useState } from 'react'

import logo from './assets/logo.svg'
import './styles/Home.scss'

const Home = () => {
  const [buttonDisabled, setButtonStatus] = useState(false)

  return (
    <div className="Home">
      <header className="Home-header">
        <h1>Wellcome to the React Boilerplate -- JS</h1>
        <img src={logo} className="Home-logo" alt="logo" />
      </header>
      <input
        role="button"
        readOnly
        className="Home-button"
        onClick={() => setButtonStatus(!buttonDisabled)}
        value="Disable button"
        disabled={buttonDisabled}
      />
    </div>
  )
}

export { Home }
