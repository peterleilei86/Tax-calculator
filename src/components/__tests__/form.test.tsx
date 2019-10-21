import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import {render, fireEvent, cleanup} from '@testing-library/react'
import Form from '../Form'

describe('Form component', () => {
  afterEach(() => {
    cleanup()
  })

  it('should render initially with no input value', () => {
    const {getByLabelText, getByText} = render(<Form />)
    const input = getByLabelText('input')
    expect(input).toBeDefined()
    expect((input as HTMLInputElement).value).toBe('')
    const title = getByText('Federal Tax Calculator')
    expect(title).toBeDefined()
    const button = getByText('Calculate')
    expect(button).toBeDefined()
  })

  it('should change input value when user is typing', () => {
    const {getByLabelText} = render(<Form />)
    const input = getByLabelText('input')
    const fakeValue = '123'
    fireEvent.change(input, {target: {value: fakeValue}})
    expect((input as HTMLInputElement).value).toBe(fakeValue)
  })

  it('should not change the value when entering non numeric values', () => {
    const {getByLabelText} = render(<Form />)
    const input = getByLabelText('input')
    const fakeValue = 'abc'
    fireEvent.change(input, {target: {value: fakeValue}})
    expect((input as HTMLInputElement).value).toBe('')
  })

  it('should render an error message when clicking the button with empty or negative input value', () => {
    const {getByText, getByLabelText, queryByText} = render(<Form />)
    const button = getByText('Calculate')
    fireEvent.click(button)
    expect(getByText('Please enter a number!')).toBeDefined()

    const input = getByLabelText('input')
    fireEvent.change(input, {target: {value: '-123'}})
    expect(queryByText('Please enter a number!')).toBeNull()

    fireEvent.click(button)
    expect(getByText('Please enter a positive number!')).toBeDefined()
  })
})
