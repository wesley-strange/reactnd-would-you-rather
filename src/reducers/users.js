import { RECEIVE_USERS, CREATE_USER, UPDATE_USER } from '../actions/users'

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
    case UPDATE_USER :
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
    default :
      return state
  }
}
