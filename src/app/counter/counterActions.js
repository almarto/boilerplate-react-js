export const actionTypes = {
  COUNTER_INCREMENT: 'COUNTER_INCREMENT',
  COUNTER_DECREMENT: 'COUNTER_DECREMENT',
  COUNTER_RESET: 'COUNTER_RESET',
}

export const incrementCounter = quantity => ({
  type: actionTypes.COUNTER_INCREMENT,
  payload: quantity,
})

export const decrementCounter = quantity => ({
  type: actionTypes.COUNTER_DECREMENT,
  payload: quantity,
})

export const resetCounter = () => ({
  type: actionTypes.COUNTER_RESET,
})
