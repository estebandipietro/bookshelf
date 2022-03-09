// this module doesn't do anything for the exercise. But you'll use this for
import React from 'react'
import {AuthProvider} from './auth-context.exercise'
import {BrowserRouter as Router} from 'react-router-dom'
import {ReactQueryConfigProvider} from 'react-query'

const queryConfig = {
  retry(failureCount, error) {
    if (error.status === 404) return false
    else if (failureCount < 2) return true
    else return false
  },
  useErrorBoundary: true,
  refetchAllOnWindowFocus: false,
}

function AppProviders({children}) {
  return (
    <ReactQueryConfigProvider config={queryConfig}>
      <AuthProvider>
        <Router>{children}</Router>
      </AuthProvider>
    </ReactQueryConfigProvider>
  )
}

export {AppProviders}
