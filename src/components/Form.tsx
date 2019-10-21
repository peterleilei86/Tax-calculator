import React, {useState} from 'react'
import {navigate} from '@reach/router'
import {calculate} from '../utils'
import {RouteComponentProps} from '@reach/router'
import '../css/form.css'

const Form = (props: RouteComponentProps) => {
  const [inputValue, setInputValue] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const value = Number(inputValue)
    if (value <= 0) {
      setError(`Please enter a ${value === 0 ? '' : 'positive'} number!`)
      return
    }
    const state = calculate(value)
    navigate('/result', {state})
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError('')
    setInputValue(e.target.value)
  }

  return (
    <div className='App'>
      <h1>Federal Tax Calculator</h1>
      <form className='form'>
        <input
          aria-label='input'
          type='number'
          className='input'
          placeholder='Enter a positive number'
          value={inputValue}
          onChange={handleChange}
        />
        <p className='error'>{error}</p>
        <button className='btn-submit' type='submit' onClick={handleSubmit}>
          Calculate
        </button>
      </form>
    </div>
  )
}

export default Form
