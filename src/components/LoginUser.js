import React, { Component } from 'react'
import { connect } from 'react-redux'

class LoginUser extends Component {

  render () {
    const { user } = this.props
    const { id, avatarURL } = user

    return (
      //todo: add image to dropdown option
      <option value={id}>{id}</option>
    )
  }
}


function mapStateToProps ({ users }, { id }) {
  const user = users[id]

  return {
    user,
  }
}

export default connect(mapStateToProps)(LoginUser)
