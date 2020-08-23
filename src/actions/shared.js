import { _getUsers, _getQuestions, _getAuthedUser, _saveQuestionAnswer, _saveQuestion } from '../utils/_DATA'
import { setAuthedUser } from '../actions/authedUser'
import { receiveUsers, updateUserAnswers, updateUserQuestions } from '../actions/users'
import { receiveQuestions, updateQuestion, addQuestion } from '../actions/questions'

const AUTHED_ID = ''

export function handleInitialData () {
  return (dispatch) => {
    return Promise.all([
      _getUsers(),
      _getQuestions()
    ]).then(([ users, questions, authedUser ]) => {
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
        dispatch(updateUserAnswers(authedUser, question.id, answer))
        dispatch(updateQuestion(authedUser, question.id, answer))
      })
  }
}

export function handleCreateQuestion (optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    return _saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser
    })
      .then((formattedQuestion) => {
        dispatch(updateUserQuestions(formattedQuestion.author, formattedQuestion.id))
        dispatch(addQuestion(formattedQuestion))
      })
  }
}
