import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/Login.css';
import { handleLogin } from '../actions/authedUser'

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

    const toHome = dispatch(handleLogin(username, password))

    this.setState(() => ({
      username: '',
      password: '',
      toHome: toHome
    }))
  }

  render() {
    const { username, password } = this.state

    // redirect to homepage after login

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
          <p className="create" align="center">New user? No problem! Create an account</p>
        </form>
      </div>
    )
  }
}

export default connect()(Login)
