import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
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
  state = {
    color: 'rgba(31,122,140,0.75)'
  }

  changeColor = (color) => {
    this.setState({ color });
  };

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container' style={{ background: this.state.color }}>
            <Nav changeColor={this.changeColor} />
            {this.props.authedUser === null
              ? null
              : <div className='main'>
                  <Route
                    path='/login' exact
                    render={(props) => (
                      <Login {...props} changeColor={this.changeColor} />
                    )}
                  />
                  <Route
                    path='/createuser' exact
                    component={CreateUser}
                  />
                  <PrivateRoute
                    path='/questionlist' exact
                    component={QuestionList}
                    auth={!this.props.unauth}
                  />
                  <PrivateRoute
                    path='/question/:id' exact
                    component={QuestionResults}
                    auth={!this.props.unauth}
                  />
                  <PrivateRoute
                    path='/leaderboard' exact
                    component={Leaderboard}
                    auth={!this.props.unauth}
                  />
                  <PrivateRoute
                    path='/add' exact
                    component={CreateQuestion}
                    auth={!this.props.unauth}
                  />
                </div>}
          </div>
        </Fragment>
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
