import { RECEIVE_QUESTIONS, UPDATE_QUESTION, ADD_QUESTION } from '../actions/questions'

export default function questions (state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    case UPDATE_QUESTION :
      const { uid, qid, answer } = action

      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([uid])
          }
        }
      }
    case ADD_QUESTION :
      const { question } = action
      
      return {
        ...state,
        [question.id]: question
      }
    default :
      return state
  }
}
