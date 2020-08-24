import { _saveAuthedUser } from '../utils/_DATA'

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
      return _saveAuthedUser({username})
        .then((authedUser) => {
          dispatch(setAuthedUser(authedUser))
        })
        .then(() => {
          alert('Login successful')
          return true
        })
        .catch((err) => {
          alert('Error occured during login. Please try again.')
          return false
        })
    } else {
      return new Promise((res, rej) => {
        alert('Username or password invalid.')
        res(false)
      })

    }
  }
}
