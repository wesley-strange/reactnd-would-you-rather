import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import '../styles/Nav.css';
import { setAuthedUser } from '../actions/authedUser'

class Nav extends Component {
  handleLogout = (e) => {
    e.preventDefault()

    const { dispatch } = this.props

    dispatch(setAuthedUser(''))
  }

  render() {
    return (
      <nav className='nav'>
        <ul className='nav-left'>
          <li>
            <NavLink to='/questionlist' exact activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/createquestion' exact activeClassName='active'>
              Create Question
            </NavLink>
          </li>
          <li>
            <NavLink to='/leaderboard' exact activeClassName='active'>
              Leaderboard
            </NavLink>
          </li>
        </ul>
        <ul className='nav-right'>
          <li>
            {this.props.authedUser}
          </li>
          <li>
            <NavLink to='/login' exact activeClassName='active' onClick={this.handleLogout}>
              {this.props.authorAvatar ? 'Logout' : null}
            </NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}

function mapStateToProps ({authedUser, users}) {
  const authorAvatar = authedUser !== '' && authedUser !== null
    ? users[authedUser].avatarURL
    : null

  return {
    authedUser,
    authorAvatar
  }
}

export default connect(mapStateToProps)(Nav)
