import { createReducer } from 'libs/create-reducer/createReducer'

import { actionTypes } from './counterActions'

const INITIAL_STATE = 0

const counter = createReducer(INITIAL_STATE, {
  [actionTypes.COUNTER_INCREMENT]: (storeCounter, quantity) =>
    storeCounter + quantity,
  [actionTypes.COUNTER_DECREMENT]: decrementCounter,
  [actionTypes.COUNTER_RESET]: INITIAL_STATE,
})

function decrementCounter(storeCounter, quantity) {
  return storeCounter + quantity
}

export { counter }
