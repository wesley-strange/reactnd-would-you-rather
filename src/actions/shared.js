import { _getUsers, _getQuestions, _getAuthedUser, _saveQuestionAnswer, _saveQuestion } from '../utils/_DATA'
import { setAuthedUser } from '../actions/authedUser'
import { receiveUsers, updateUserAnswers, updateUserQuestions } from '../actions/users'
import { receiveQuestions, updateQuestion, addQuestion } from '../actions/questions'
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTHED_ID = ''

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return Promise.all([
      _getUsers(),
      _getQuestions()
    ]).then(([ users, questions, authedUser ]) => {
      dispatch(receiveUsers(users))
      dispatch(receiveQuestions(questions))
      dispatch(setAuthedUser(AUTHED_ID))
      dispatch(hideLoading())
    })
  }
}

export function handleSaveQuestionAnswer (question, answer) {
  return (dispatch, getState) => {
    const { authedUser, users } = getState()

    dispatch(updateUserAnswers(authedUser, question.id, answer))
    dispatch(updateQuestion(authedUser, question.id, answer))

    return _saveQuestionAnswer({
      authedUser,
      qid: question.id,
      answer
    })
      .catch((err) => {
        dispatch(updateUserAnswers(authedUser, question.id, answer))
        dispatch(updateQuestion(authedUser, question.id, answer))
        alert('There was an error saving your answer. Please try again.')
      })
  }
}

export function handleCreateQuestion (optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    dispatch(showLoading())
    const { authedUser } = getState()

    return _saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser
    })
      .then((formattedQuestion) => {
        dispatch(updateUserQuestions(formattedQuestion.author, formattedQuestion.id))
        dispatch(addQuestion(formattedQuestion))
        dispatch(hideLoading())
      })
  }
}
