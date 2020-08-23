import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoadingBar from 'react-redux-loading'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import '../styles/App.css';
import Login from './Login'
import CreateUser from './CreateUser'
import QuestionList from './QuestionList'
import QuestionResults from './QuestionResults'
import CreateQuestion from './CreateQuestion'
import Leaderboard from './Leaderboard'
import Nav from './Nav'
import { PrivateRoute } from './PrivateRoute'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
          {this.props.authedUser === null
            ? null
            : <div>
                <Route path='/login' exact component={Login} />
                <Route path='/createuser' exact component={CreateUser} />
                <PrivateRoute path='/questionlist' exact component={QuestionList} auth={this.props.unauth} />
                <PrivateRoute path='/question/:id' exact component={QuestionResults} auth={this.props.unauth} />
                <PrivateRoute path='/leaderboard' exact component={Leaderboard} auth={this.props.unauth} />
                <PrivateRoute path='/createquestion' exact component={CreateQuestion} auth={this.props.unauth} />
              </div>}
        </div>
      </Router>
    )
  }
}

function mapStateToProps ({authedUser}) {
  return {
    unauth: authedUser === '',
    authedUser
  }
}

export default connect(mapStateToProps)(App)
