import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/Nav.css';

class Nav extends Component {
  render() {

    return (
      <nav className='nav'>
        <ul className='nav-left'>
          <li>
            Home
          </li>
          <li>
            Create Question
          </li>
          <li>
            Leaderboard
          </li>
        </ul>
        <ul className='nav-right'>
          <li>
            User
          </li>
          <li>
            Logout
          </li>
        </ul>
      </nav>
    )
  }
}

export default connect()(Nav)
