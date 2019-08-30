import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'

import NasaDataTest from '../NasaData/NasaDataTest'

import Favorite from '../Favorites/Favorite'
import Favorites from '../Favorites/Favorites'
// import CreateFavorite from '../Favorites/CreateFavorite'
import FavoriteEdit from '../Favorites/FavoriteEdit'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = ({ heading, message, variant }) => {
    this.setState({ alerts: [...this.state.alerts, { heading, message, variant }] })
  }

  render () {
    const { alerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {alerts.map((alert, index) => (
          <AutoDismissAlert
            key={index}
            heading={alert.heading}
            variant={alert.variant}
            message={alert.message}
          />
        ))}
        <main className="container">
          <Route exact path='/' render={() => (
            <NasaDataTest alert={this.alert} user={user} updatePlanet={this.updatePlanet}/>
          )} />
          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />

          <Route exact user={user} path='/exoplanets2' render={() => (
            <NasaDataTest alert={this.alert} user={user} updatePlanet={this.updatePlanet}/>
          )} />

          <AuthenticatedRoute user={user} exact path='/favorites' render={() => (
            <Favorites alert={this.alert} user={user} updatePlanet={this.updatePlanet}/>
          )} />

          <AuthenticatedRoute user={user} exact path='/favorites/:id' render={() => (
            <Favorite alert={this.alert} user={user} updatePlanet={this.updatePlanet}/>
          )} />

          <AuthenticatedRoute user={user} path='/favorites/:id/edit' render={() => (
            <FavoriteEdit alert={this.alert} user={user} />
          )} />
        </main>
      </Fragment>
    )
  }
}

export default App
