import { _saveAuthedUser } from '../utils/_DATA'
import { showLoading, hideLoading } from 'react-redux-loading'

export const SET_AUTHED_USER = 'SET_AUTHED_USER'

export function setAuthedUser (id) {
  return {
    type: SET_AUTHED_USER,
    id,
  }
}

export function handleLogin (username, password) {
  return (dispatch, getState) => {
    const { users } = getState()

    if (users[username] && (users[username].password === password)) {
      dispatch(showLoading())
      return _saveAuthedUser({username})
        .then((authedUser) => {
          dispatch(setAuthedUser(authedUser))
        })
        .then(() => {
          dispatch(hideLoading())
          return true
        })
        .catch((err) => {
          dispatch(hideLoading())
          alert('Error occured during login. Please try again.')
          return false
        })
    } else {
      return new Promise((res, rej) => {
        dispatch(hideLoading())
        alert('Username or password invalid.')
        res(false)
      })

    }
  }
}
