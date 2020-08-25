import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import '../styles/QuestionList.css';

class QuestionList extends Component {
  state = {
    answered: false
  }

  toggleAnswered = (e) => {
    this.setState((prevState) => ({
      answered: !prevState.answered
    }))
  }

  render() {
    const { answered } = this.state
    const { answeredQuestions, unansweredQuestions } = this.props

    return (
      <div>
        <div className='question-buttons'>
          <button
            name='unanswered'
            className='toggle-button'
            disabled={!answered}
            onClick={this.toggleAnswered}
          >
            Unanswered
          </button>
          <button
            name='answered'
            className='toggle-button'
            disabled={answered}
            onClick={this.toggleAnswered}
          >
            Answered
          </button>
        </div>
        <div>
          <ul className='question-list'>
            {answered
              ? (
                answeredQuestions.map((question) => (
                  <li key={question.id}>
                    <Question id={question.id} />
                  </li>
                ))
              )
              : unansweredQuestions.map((question) => (
                <li key={question.id}>
                  <Question id={question.id} />
                </li>
              ))}
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({authedUser, questions}) {
  const answeredQuestions = Object.values(questions).filter((question) => (
    question.optionOne.votes.includes(authedUser)
    || question.optionTwo.votes.includes(authedUser))
  ).sort((a, b) => b.timestamp - a.timestamp)

  const unansweredQuestions = Object.values(questions).filter((question) => (
    !question.optionOne.votes.includes(authedUser)
    && !question.optionTwo.votes.includes(authedUser))
  ).sort((a, b) => b.timestamp - a.timestamp)

  return {
    answeredQuestions,
    unansweredQuestions
  }
}

export default connect(mapStateToProps)(QuestionList)
