import { _saveUser } from '../utils/_DATA'

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const CREATE_USER = 'CREATE_USER'
export const UPDATE_USER = 'UPDATE_USER'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

function createUser (user) {
  return {
    type: CREATE_USER,
    user
  }
}

export function updateUser (uid, qid, answer) {
  return {
    type: UPDATE_USER,
    uid,
    qid,
    answer
  }
}

export function handleCreateUser (username, password, name, avatarURL) {
  return (dispatch) => {
    // add in showloading and hideloading

    return _saveUser({
      username,
      password,
      name,
      avatarURL
    })
      .then((user) => dispatch(createUser(user)))
  }
}
