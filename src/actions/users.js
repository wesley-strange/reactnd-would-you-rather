import { _saveUser } from '../utils/_DATA'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const CREATE_USER = 'CREATE_USER'
export const UPDATE_USER_ANSWERS = 'UPDATE_USER_ANSWERS'
export const UPDATE_USER_QUESTIONS = 'UPDATE_USER_QUESTIONS'

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

export function updateUserAnswers (uid, qid, answer) {
  return {
    type: UPDATE_USER_ANSWERS,
    uid,
    qid,
    answer
  }
}

export function updateUserQuestions (uid, qid) {
  return {
    type: UPDATE_USER_QUESTIONS,
    uid,
    qid,
  }
}

export function handleCreateUser (username, password, name, avatarURL) {
  return (dispatch) => {
    dispatch(showLoading())

    return _saveUser({
      username,
      password,
      name,
      avatarURL
    })
      .then((user) => {
        dispatch(createUser(user))
        dispatch(hideLoading())
      })
  }
}
