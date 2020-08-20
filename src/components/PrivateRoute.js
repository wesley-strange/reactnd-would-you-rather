import React from "react"
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  withRouter
} from 'react-router-dom'

const fakeAuth = true

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth === true
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
  )} />
)
