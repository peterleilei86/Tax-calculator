import React from 'react'
import {RouteComponentProps, navigate} from '@reach/router'

const PageNotFound = (props: RouteComponentProps) => {
  const handleClick = (e: React.SyntheticEvent) => {
    navigate('/')
  }
  return (
    <div className='wrapper'>
      <p className='pageNotFound'>Oops, it seems the url you entered is wrong.</p>
      <button className='btn-back' onClick={handleClick}>
        Home
      </button>
    </div>
  )
}

export default PageNotFound
