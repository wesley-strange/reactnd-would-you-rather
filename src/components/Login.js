import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { handleLogin } from '../actions/authedUser'
import { connect } from 'react-redux'
import '../styles/Login.css';

class Login extends Component {
  state = {
    username: '',
    password: '',
    toHome: false
  }

  handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name

    this.setState(() => ({
      [name]: value
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { username, password } = this.state
    const { dispatch } = this.props

    dispatch(handleLogin(username, password))
    .then((toHome) => {
      this.setState(() => ({
        username: '',
        password: '',
        toHome
      }))
      this.props.changeColor('white')
    })
    .catch((err) => {
      console.log(err)
    })

  }

  render() {
    const { username, password, toHome } = this.state

    if (toHome === true) {
      return <Redirect to='/questionlist' />
    }

    return (
      <div className="login-window">
        <p className="login-title" align="center">Would You Rather</p>
        <p className="login-greeting" align="center">Please log in to continue...</p>
        <form className="login-form" onSubmit={this.handleSubmit}>
          <input
            className="username"
            type="text"
            align="center"
            placeholder="Username"
            name='username'
            value={username}
            onChange={this.handleChange}
          />
          <input
            className="password"
            type="password"
            align="center"
            placeholder="Password"
            name='password'
            value={password}
            onChange={this.handleChange}
          />
          <button className="submit" type='submit' align="center">Log in</button>
          <Link to='createuser' className="create" align="center">New user? No problem! Create an account</Link>
        </form>
      </div>
    )
  }
}

export default connect()(Login)
