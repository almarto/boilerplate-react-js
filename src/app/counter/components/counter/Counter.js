import React, { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0)

  const increment = () => setCounter(counter + 1)
  const decrement = () => {
    if (!counter) return
    setCounter(counter - 1)
  }

  return (
    <div className="counter">
      <div className="counter-content">Counter: {counter}</div>
      <button className="counter-increment" onClick={increment}>
        Increment
      </button>
      <button className="counter-decrement" onClick={decrement}>
        Decrement
      </button>
    </div>
  )
}

export { Counter }
