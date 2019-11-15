import React from 'react'
import { useHistory } from 'react-router-dom'
import { string } from 'prop-types'

import logo from './assets/logo.svg'
import './styles/Header.scss'

const Header = ({ name }) => {
  const history = useHistory()

  const goToHome = () => {
    history.push('/')
  }
  const goToCounter = () => {
    history.push('/counter')
  }

  return (
    <header className="header">
      <h1>Wellcome to the React Boilerplate -- {name}</h1>
      <img src={logo} className="header__logo" alt="logo" />
      <ul className="header__menu">
        <li className="header__option" onClick={goToHome}>
          Home
        </li>
        <li className="header__option" onClick={goToCounter}>
          Counter
        </li>
      </ul>
    </header>
  )
}

Header.propTypes = {
  name: string,
}

Header.defaultProps = {
  name: 'JS',
}

export { Header }
