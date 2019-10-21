import React from 'react'
import {Router} from '@reach/router'
import Form from '../components/Form'
import Result from '../components/Result'
import PageNotFound from '../components/PageNotFound'

const Routes = () => (
  <Router>
    <Form path='/' />
    <Result path='/result' />
    <PageNotFound default />
  </Router>
)

export default Routes
