import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { render, waitForElement } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { rootReducer } from 'reducers'
import { Header } from 'layout/header'
import { HomePage } from 'pages/home'

function mount(Component, props, initialState = {}) {
  const store = createStore(rootReducer, initialState)
  return render(
    <Router>
      <Header />
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    </Router>,
  )
}

describe('Home', () => {
  it('renders correctly', async () => {
    const { getByText } = mount(HomePage)

    await waitForElement(() => getByText('Welcome to the Home Page'))
    await waitForElement(() =>
      getByText('Wellcome to the React Boilerplate -- JS'),
    )
  })
})
