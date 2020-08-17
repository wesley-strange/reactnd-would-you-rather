import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/QuestionResults.css';

class QuestionResults extends Component {
  render() {
    const { question, answer, authorAvatar } = this.props
    const { id, author, optionOne, optionTwo } = question
    const hidden = true

    return (
      <div className='result'>
        <div className='result-title'>Would You Rather...</div>
        <div className='result-option result-one selected'>
          <p className='result-results'>3 people (75%) voted for this</p>
          <p className='result-text'>{optionOne.text}</p>
          <p className='result-selected' hidden={false}>YOUR SELECTION</p>
        </div>
        <div className='result-option result-two'>
          <p className='result-results'>1 people (25%) voted for this</p>
          <p className='result-text'>{optionTwo.text}</p>
          <p className='result-selected' hidden={true}>YOUR SELECTION</p>
        </div>
        <div className='result-author'>
          <img className='result-author-avatar' src={authorAvatar} />
          <p>Submitted by {author}</p>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({authedUser, users, questions}, { id }) {
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
