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
        .then(() => {
          dispatch(setAuthedUser(username))
          // alert('Login successful')
        })
        .catch(() => {
          // alert('Error occured during login. Please try again.')
        })
    } else {
      alert('Username or password invalid.')
      return false
    }
  }
}
