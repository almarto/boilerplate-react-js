import React from 'react'
import { render, waitForElement, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { Home } from '../Home'

describe('Home', () => {
  it('renders correctly', async () => {
    const { getByRole, getByText } = render(<Home />)

    await waitForElement(() => getByRole('heading'))
    await waitForElement(() => getByRole('button'))
    await waitForElement(() => getByText('Counter: 0'))

    const button = getByRole('button')

    expect(getByRole('heading')).toHaveTextContent(
      'Wellcome to the React Boilerplate -- JS',
    )
    expect(button).toHaveValue('Disable button')
    expect(button).not.toHaveAttribute('disabled')
  })

  it('click button disables it', async () => {
    const { getByDisplayValue, getByRole } = render(<Home />)

    const button = getByDisplayValue('Disable button')

    fireEvent.click(button)

    expect(getByRole('button')).toHaveAttribute('disabled')
  })
})
