import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/Leaderboard.css';
import LeaderboardEntry from './LeaderboardEntry'

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
              <LeaderboardEntry id={user.id} />
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