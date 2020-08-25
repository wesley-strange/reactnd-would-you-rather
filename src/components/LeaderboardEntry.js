import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/Leaderboard.css';

class LeaderboardEntry extends Component {
  render() {
    const { user } = this.props

    return (
      <div className='leaderboard-entry'>
        <img
          className='leaderboard-avatar'
          src={user.avatarURL}
          alt={`Avatar of ${user.name}`}
        />
        <h4 className='leaderboard-username'>{user.name}</h4>
        <p className='leaderboard-answers center'>{Object.keys(user.answers).length}</p>
        <p className='leaderboard-questions center'>{user.questions.length}</p>
        <p className='total center'>{Object.keys(user.answers).length + user.questions.length}</p>
      </div>
    )
  }
}

function mapStateToProps ({users}, {id}) {
  const user = users[id]
  return {
    user
  }
}

export default connect(mapStateToProps)(LeaderboardEntry)
