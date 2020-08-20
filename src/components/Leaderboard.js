import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/Leaderboard.css';

class Leaderboard extends Component {
  render() {
    const { sortedUsers } = this.props

    return (
      <div className='leaderboard-container'>
        <h3 className='center'>Leaderboard</h3>
        <div className='leaderboard-headers'>
          <p className='leaderboard-header'></p>
          <h4 className='leaderboard-header'></h4>
          <p className='leaderboard-header'>Answers</p>
          <p className='leaderboard-header'>Questions</p>
          <p className='leaderboard-header total'>Total</p>
        </div>
        <ul className='leaderboard'>
          {sortedUsers.map((user) => (
            <li key={user.id}>
              <div className='leaderboard-entry'>
                <img
                  className='leaderboard-avatar'
                  src={user.avatarURL}
                  alt={`Avatar of ${user.name}`}
                />
                <h4 className='leaderboard-username'>{user.name}</h4>
                <p className='leaderboard-answers'>{Object.keys(user.answers).length}</p>
                <p className='leaderboard-questions'>{user.questions.length}</p>
                <p className='total'>{Object.keys(user.answers).length + user.questions.length}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps ({users}) {
  const sortedUsers = Object.values(users).sort((a, b) => (
    (Object.keys(b.answers).length + b.questions.length) - (Object.keys(a.answers).length + a.questions.length)
  ))
  return {
    sortedUsers
  }
}

export default connect(mapStateToProps)(Leaderboard)
