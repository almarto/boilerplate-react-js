import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render, waitForElement, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { rootReducer } from 'reducers'
import { Home } from 'pages/home'

function incrementClick(container) {
  const incrementButton = container.getByText('Increment')

  fireEvent.click(incrementButton)
}

function decrementClick(container) {
  const decrementButton = container.getByText('Decrement')

  fireEvent.click(decrementButton)
}

function mount(Component, props, initialState = {}) {
  const store = createStore(rootReducer, initialState)
  return render(
    <Provider store={store}>
      <Component {...props} />
    </Provider>,
  )
}

describe('Home', () => {
  it('renders correctly', async () => {
    const { getByRole, getByText } = mount(Home)

    await waitForElement(() => getByRole('heading'))
    await waitForElement(() => getByText('Counter: 0'))

    expect(getByRole('heading')).toHaveTextContent(
      'Wellcome to the React Boilerplate -- JS',
    )
  })

  describe('counter section', () => {
    it('starts with counter 0', async () => {
      const { getByText } = mount(Home)

      await waitForElement(() => getByText('Counter: 0'))
    })

    it('can increment counter', async () => {
      const homePage = mount(Home)

      incrementClick(homePage)

      await waitForElement(() => homePage.getByText('Counter: 1'))
    })

    it('can decrement counter', async () => {
      const homePage = mount(Home)

      incrementClick(homePage)
      decrementClick(homePage)

      await waitForElement(() => homePage.getByText('Counter: 0'))
    })

    it('can not decrement counter if value is 0', async () => {
      const homePage = mount(Home)

      decrementClick(homePage)

      await waitForElement(() => homePage.getByText('Counter: 0'))
    })
  })
})
