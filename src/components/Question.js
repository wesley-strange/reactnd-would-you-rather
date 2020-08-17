import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/Question.css';

class Question extends Component {
  render() {
    const { question, authorAvatar } = this.props
    const { id, author, optionOne, optionTwo } = question

    return (
      <div className='question'>
        <div className='question-title'>Would You Rather...</div>
        <div className='question-option option-one'>{optionOne.text}</div>
        <div className='question-option option-two'>{optionTwo.text}</div>
        <div className='question-author'>
          <img className='question-author-avatar' src={authorAvatar} />
          <p>Submitted by {author}</p>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({authedUser, users, questions}, { id }) {
  const question = questions[id]
  const authorAvatar = users[question.author].avatarURL

  return {
    question,
    authorAvatar
  }
}

export default connect(mapStateToProps)(Question)
