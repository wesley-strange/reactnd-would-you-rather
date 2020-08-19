import { RECEIVE_USERS, CREATE_USER, UPDATE_USER_ANSWERS, UPDATE_USER_QUESTIONS } from '../actions/users'

export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
    case CREATE_USER :
      const  { user } = action

      return {
        ...state,
        [user.id]: user
      }
    case UPDATE_USER_ANSWERS :
      const { uid, qid, answer } = action

      return {
        ...state,
        [uid]: {
          ...state[uid],
          answers: {
            ...state[uid].answers,
            [qid]: answer
          }
        }
      }
    case UPDATE_USER_QUESTIONS :
      return {
        ...state,
        [action.uid]: {
          ...state[action.uid],
          questions: state[action.uid].questions.concat([action.qid])
        }
      }
    default :
      return state
  }
}
