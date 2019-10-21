import React from 'react'
import {RouteComponentProps, navigate, Redirect} from '@reach/router'
import '../css/result.css'

const Result = (props: RouteComponentProps) => {
  if (!props.location!.state) {
    // Redirect users to home page if they come to result page
    // by typing in the address bar
    return <Redirect to='/' noThrow />
  }

  const {tax, base, rate, cap, gross} = props.location!.state
  const handleClick = (e: React.SyntheticEvent) => {
    navigate('/')
  }
  return (
    <div className='App'>
      <h1>Tax break down</h1>
      <div className='table'>
        <p>
          Total taxable income: <span>{gross}</span>
        </p>
        <p>
          Base amount: <span>{cap}</span>
        </p>
        <p>
          Federal tax rate: <span>{rate}</span>
        </p>
        <p>
          Tax on base amount: <span>{base}</span>
        </p>
        <p>
          Total tax: <span>{tax}</span>
        </p>
      </div>
      <button className='btn-back' onClick={handleClick}>
        Back
      </button>
    </div>
  )
}

export default Result
