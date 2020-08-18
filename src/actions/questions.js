import { _saveQuestionAnswer } from '../utils/_DATA'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const UPDATE_QUESTION = 'UPDATE_QUESTION'

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

function updateQuestion (question) {
  return {
    type: UPDATE_QUESTION,
    question
  }
}

export function handleSaveQuestionAnswer (question, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    return _saveQuestionAnswer({
      authedUser,
      qid: question.id,
      answer
    })
      .then(() => dispatch(updateQuestion(question)))
  }
}
