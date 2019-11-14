import { createStore, compose, applyMiddleware } from 'redux'

import { rootReducer } from 'reducers'

const initialState = {
  counter: 0,
}

const middleware = []
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      name: 'Boilerplate JS',
      actionsBlacklist: ['REDUX_STORAGE_SAVE'],
    })
    : compose)

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
)

const store = createStore(rootReducer, initialState, enhancer)

export { store }
