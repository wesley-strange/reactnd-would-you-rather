import { RECEIVE_USERS, CREATE_USER } from '../actions/users'

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
    default :
      return state
  }
}
