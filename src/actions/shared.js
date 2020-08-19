import { _getUsers, _getQuestions, _saveQuestionAnswer } from '../utils/_DATA'
import { setAuthedUser } from '../actions/authedUser'
import { receiveUsers, updateUser } from '../actions/users'
import { receiveQuestions, updateQuestion } from '../actions/questions'

const AUTHED_ID = 'swaggyprophet'

export function handleInitialData () {
  return (dispatch) => {
    return Promise.all([
      _getUsers(),
      _getQuestions()
    ]).then(([ users, questions ]) => {
      dispatch(receiveUsers(users))
      dispatch(receiveQuestions(questions))
      dispatch(setAuthedUser(AUTHED_ID))
    })
  }
}

export function handleSaveQuestionAnswer (question, answer) {
  return (dispatch, getState) => {
    const { authedUser, users } = getState()

    return _saveQuestionAnswer({
      authedUser,
      qid: question.id,
      answer
    })
      .then(() => {
        dispatch(updateUser(authedUser, question.id, answer))
        dispatch(updateQuestion(authedUser, question.id, answer))
      })
  }
}
