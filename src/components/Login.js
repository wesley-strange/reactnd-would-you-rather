import React, { Component } from 'react'
import { connect } from 'react-redux'

class Login extends Component {
  render() {
    return (
      <div>
        <h3>Select a user from the drop-down to login:</h3>
        <select name='userid'>
          {this.props.userIds.map((id) => (
            <option key={id} value={id}>{id}</option>
          ))}
        </select>
      </div>
    )
  }
}

function mapStateToProps ({users}) {
  return {
    userIds: Object.keys(users)
      .sort((a,b) => users[b] - users[a])
  }
}

export default connect(mapStateToProps)(Login)
