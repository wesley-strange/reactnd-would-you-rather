import { _getUsers, _getQuestions } from '../utils/_DATA'
import { setAuthedUser } from '../actions/authedUser'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'

const AUTHED_ID = 'tylermcginnis'

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
