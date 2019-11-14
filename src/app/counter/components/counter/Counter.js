import React from 'react'
import { number } from 'prop-types'

const Counter = ({ counter }) => <div>Counter: {counter}</div>

Counter.propTypes = {
  counter: number,
}

Counter.defaultProps = {
  counter: 0,
}

export { Counter }
