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
      dispatch(setAuthedUser(username))
      alert('Login successful')
      return true
    } else {
      alert('Username or password invalid.')
      return false
    }
  }
}
