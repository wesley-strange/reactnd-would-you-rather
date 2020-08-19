import { _saveQuestionAnswer } from '../utils/_DATA'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const UPDATE_QUESTION = 'UPDATE_QUESTION'

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function updateQuestion (uid, qid, answer) {
  return {
    type: UPDATE_QUESTION,
    uid,
    qid,
    answer
  }
}
