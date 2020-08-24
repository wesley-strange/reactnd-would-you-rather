import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import '../styles/CreateUser.css';
import { handleCreateUser } from '../actions/users'

class CreateUser extends Component {
  state = {
    username: '',
    password: '',
    name: '',
    toLogin: false
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

    const { username, password, name } = this.state
    const { dispatch } = this.props

    const promise = dispatch(handleCreateUser(username, password, name))
    .then(() => {
      this.setState(() => ({
        username: '',
        password: '',
        name: '',
        toLogin: true
      }))
    })
  }

  render() {
    const { username, password, name, toLogin } = this.state

    if (toLogin === true) {
      return <Redirect to='/login' />
    }

    return (
      <div className="create-window">
        <p className="create-title" align="center">Create Account</p>
        <form className="create-form" onSubmit={this.handleSubmit}>
          <input
            className="name"
            type="text"
            align="center"
            placeholder="Your Name"
            name='name'
            value={name}
            onChange={this.handleChange}
          />
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
          <button className="submit" type='submit' align="center">Create User</button>
        </form>
      </div>
    )
  }
}

export default connect()(CreateUser)
