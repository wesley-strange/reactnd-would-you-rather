import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import '../styles/Nav.css';

class Nav extends Component {
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
            User
          </li>
          <li>
            <NavLink to='/login' exact activeClassName='active'>
              Logout
            </NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}

export default connect()(Nav)
