import React, { Component, Fragment } from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Writers from './Writers'
import api from '../api/api'
import { Notfound } from './Errors'

export default class extends Component {
  state = {
    writers: []
  }

  async componentDidMount() {
    // console.log('really did mount?')
    const { data } = await api({url: '/writers', method: 'GET'})
    this.setState({writers: data})
  }

  render() {
    const { writers } = this.state
    return (
      <BrowserRouter>
        <Fragment>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/writers">Writers</Link>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/" render={() => <div><h1>It's Home</h1></div>}/>
            <Route path="/writers" render={
              (props) => <Writers {...props} writers={writers}/>
            }/>
            <Route render={() => <Notfound />}/>
          </Switch>
        </Fragment>
      </BrowserRouter>
    )
  }
}