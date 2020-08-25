import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import '../styles/CreateQuestion.css'
import { handleCreateQuestion } from '../actions/shared'

class CreateQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
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

    const { optionOne, optionTwo } = this.state
    const { dispatch } = this.props

    if (optionOne !== '' && optionTwo !== '' && optionOne !== optionTwo) {
      dispatch(handleCreateQuestion(optionOne, optionTwo))
      .then(() => {
        this.setState(() => ({
          optionOne: '',
          optionTwo: '',
          toHome: true
        }))
      })
    } else {
      alert("Options cannot be blank and cannot be the same. Try again.")
    }


  }

  render() {
    const { optionOne, optionTwo, toHome } = this.state

    if (toHome === true) {
      return <Redirect to='/' />
    }

    return (
      <form className='new-question' onSubmit={this.handleSubmit}>
        <div className='new-title'>Would You Rather...</div>
        <textarea
          name='optionOne'
          className='new-option new-option-one'
          placeholder='Enter option 1...'
          value={optionOne}
          onChange={this.handleChange}
        ></textarea>
        <textarea
          name='optionTwo'
          className='new-option new-option-two'
          placeholder='Enter option 2...'
          value={optionTwo}
          onChange={this.handleChange}
        ></textarea>
        <button className="new-submit" type='submit' align="center">Create Question</button>
      </form>
    )
  }
}

export default connect()(CreateQuestion)
