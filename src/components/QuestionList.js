import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionList extends Component {
  state = {
    answered: false
  }

  render() {
    const { answered } = this.state
    const { answeredQuestions, unansweredQuestions } = this.props

    return (
      <div>
        <h3 className='center'>Questions</h3>
        <ul className='dashboard-list'>
          {answered
            ? (
              answeredQuestions.map((question) => (
                <li key={question.id}>
                  {question.id}
                </li>
              ))
            )
            : unansweredQuestions.map((question) => (
              <li key={question.id}>
                {question.id}
              </li>
            ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps ({authedUser, questions}) {
  const user = 'swaggyprophet'
  const answeredQuestions = Object.values(questions).filter((question) => (
    question.optionOne.votes.includes(user)
    || question.optionTwo.votes.includes(user))
  )
  const unansweredQuestions = Object.values(questions).filter((question) => (
    !question.optionOne.votes.includes(user)
    && !question.optionTwo.votes.includes(user))
  )

  return {
    answeredQuestions,
    unansweredQuestions
  }
}

export default connect(mapStateToProps)(QuestionList)