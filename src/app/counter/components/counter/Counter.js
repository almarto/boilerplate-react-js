import React from 'react'
import { connect } from 'react-redux'
import { func, number } from 'prop-types'

import { incrementCounter, decrementCounter } from 'app/counter/counterActions'

const Counter = ({ counter, incrementCounter, decrementCounter }) => (
  <div className="counter">
    <div className="counter-content">Counter: {counter}</div>
    <button className="counter-increment" onClick={incrementCounter}>
      Increment
    </button>
    <button className="counter-decrement" onClick={decrementCounter}>
      Decrement
    </button>
  </div>
)

Counter.propTypes = {
  counter: number.isRequired,
  incrementCounter: func.isRequired,
  decrementCounter: func.isRequired,
}

const mapStateToProps = ({ counter }) => ({
  counter,
})

const mapDispatchToProps = dispatch => ({
  incrementCounter: () => dispatch(incrementCounter(1)),
  decrementCounter: () => dispatch(decrementCounter(1)),
})

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter)

export { ConnectedCounter as Counter }
