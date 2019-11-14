import React from 'react'
import { string } from 'prop-types'

import logo from './assets/logo.svg'
import './styles/Header.scss'

const Header = ({ name }) => (
  <header className="header">
    <h1>Wellcome to the React Boilerplate -- {name}</h1>
    <img src={logo} className="header-logo" alt="logo" />
  </header>
)

Header.propTypes = {
  name: string,
}

Header.defaultProps = {
  name: 'JS',
}

export { Header }
