import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import { serviceWorker } from 'services/service-worker'
import { store } from 'store'
import { App } from 'app'

render(
  <Provider store={store}>{App}</Provider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
