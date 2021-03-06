import React, { Component, Fragment } from 'react'
import { Route, withRouter } from 'react-router-dom'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'

<<<<<<< HEAD
// import NasaData from '../NasaData/NasaData'
import Dashboard from '../NasaData/Dashboard'
import AllPlanets from '../NasaData/AllPlanets'
// import Footer from '../Header/Footer'
// import DailyPicture from '../NasaData/PicOfDay'
// import Landing from '../../styles/Landing'
=======
// import Home from '../ExoplanetsRoutes/Home'
import Exoplanets from '../ExoplanetsRoutes/Exoplanets'
// import Dashboard1 from '../ExoplanetsRoutes/Dashboard1'
import ExoShow from '../ExoplanetsRoutes/ExoShow'
>>>>>>> development

// import FaveIndexTest from '../FavoritesRoute/FaveIndexTest'
// import FaveShowTest from '../FavoritesRoute/FaveShowTest'
// import FaveEditTest from '../FavoritesRoute/FaveEditTest'

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
        <h4 className="disclaimer">Under Construction</h4>

        { /* Auth Routes */ }
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

        { /* Home */ }
        <Route exact path='/' component={Exoplanets} />

        { /* Exoplanet Routes */ }
        <Route exact path='/exoplanets' render={() => (
          <Exoplanets alert={this.alert} user={user}/>
        )} />
        <Route exact path='/exoplanets/:id' component={ExoShow} />

        { /* Favorites Routes */ }
        { /* <Route exact path='favorites' render={() => (
          <FaveIndexTest user={user}/>
        )} /> */ }
        { /* <Route exact path='favorites/:id' render={() => (
          <FaveShowTest user={user}/>
        )} /> */ }
        { /* <Route exact path='favorites/:id/edit' render={() => (
          <FaveEditTest user={user}/>
        )} /> */ }
      </Fragment>
    )
  }
}

export default withRouter(App)
