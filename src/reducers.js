import { combineReducers } from 'redux'

import { counter } from 'app/counter'

const rootReducer = combineReducers({
  counter,
})

export { rootReducer }
