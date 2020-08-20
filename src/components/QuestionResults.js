import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/QuestionResults.css'
import { handleSaveQuestionAnswer } from '../actions/shared'

class QuestionResults extends Component {

  handleSelection = (e) => {
    e.preventDefault()

    const { dispatch, question } = this.props

    dispatch(handleSaveQuestionAnswer(question, e.target.getAttribute('name')))
  }

  render() {
    const { question, answer, authorAvatar } = this.props
    const { author, optionOne, optionTwo } = question

    const isAnswered = answer ? true : false

    const optionOneVotes = optionOne.votes.length
    const optionTwoVotes = optionTwo.votes.length
    const totalVotes = optionOneVotes + optionTwoVotes
    const optionOneSelected = answer === "one" ? 'selected' : ''
    const optionTwoSelected = answer === "two" ? 'selected' : ''

    return (
      <div className='result'>
        <div className='result-title'>Would You Rather...</div>
        <div
          name='optionOne'
          className={`result-option result-one ${optionOneSelected}`}
          onClick={this.handleSelection}
          disabled={isAnswered}
        >
          <p className='result-results'>
            {
              isAnswered && optionOneVotes !== 0
                ? `${optionOneVotes} (${Math.round((optionOneVotes/totalVotes)*100)}%) voted for this`
                : ''
            }
          </p>
          <p className='result-text'>{optionOne.text}</p>
          <p className='result-selected'>{answer === 'one' ? 'YOUR SELECTION' : ''}</p>
        </div>
        <div
          name='optionTwo'
          className={`result-option result-two ${optionTwoSelected}`}
          onClick={this.handleSelection}
          disabled={isAnswered}
        >
          <p className='result-results'>
            {
              isAnswered && optionTwoVotes !== 0
                ? `${optionTwoVotes} (${Math.round((optionTwoVotes/totalVotes)*100)}%) voted for this`
                : ''
            }
          </p>
          <p className='result-text'>{optionTwo.text}</p>
          <p className='result-selected'>{answer === 'two' ? 'YOUR SELECTION' : ''}</p>
        </div>
        <div className='result-author'>
          <img
            className='result-author-avatar'
            src={authorAvatar}
            alt={`Avatar of ${authorAvatar}`}
          />
          <p>Submitted by {author}</p>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({authedUser, users, questions}, props) {
  const { id } = props.match.params

  const question = questions[id]
  const authorAvatar = users[question.author].avatarURL
  const user = 'swaggyprophet'
  const answer = question.optionOne.votes.includes(user)
    ? "one"
    : question.optionTwo.votes.includes(user)
      ? "two"
      : null

  return {
    question,
    answer,
    authorAvatar
  }
}

export default connect(mapStateToProps)(QuestionResults)
