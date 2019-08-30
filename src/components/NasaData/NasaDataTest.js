import React, { Component, Fragment } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import { Route, Link, withRouter } from 'react-router-dom'
// import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute

import CreateFavorite from '../Favorites/CreateFavorite'
import Planet from './Planet'

import axios from 'axios'

// require('dotenv').config()

class NasaDataTest extends Component {
  constructor (props) {
    super(props)

    this.state = {
      exoplanets: [],
      isLoading: true,
      planetToCreate: {}
    }
  }

  async componentDidMount () {
    try {
      // const apiKey = process.env.API_KEY

      const planets = this.state.exoplanets
      const response = await axios('https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&select=pl_name,pl_disc,pl_facility,pl_discmethod,pl_massj,dec&order=dec&format=json')

      const thePlanets = function (response) {
        for (let i = 0; i < 20; i++) {
          planets.push(response.data[i])
        }
      }
      thePlanets(response)

      this.setState({ exoplanets: planets })
    } catch (error) {
      console.error(error)
    }
  }

  render (props) {
    const { user, alert } = this.props

    const planetJsx = this.state.exoplanets.map(planet => (
      <Fragment key={planet.pl_name}>
        <ListGroup.Item>
          <p>
            <b>Planet Name:</b> {planet.pl_name} <br />
            <b>Discovery Year:</b> {planet.pl_disc} <br />
            <b>Discovery Facility:</b> {planet.pl_facility} <br />
            <b>Discovery Method:</b> {planet.pl_discmethod} <br />
            <b>Mass of Jupiter:</b> {planet.massj ? planet.massj : 'Unknown'}
          </p>
        </ListGroup.Item>
        <Link to={`/exoplanets2/${planet.pl_name}/create-favorite`}>
          {user
            ? <button className="btn btn-primary">Add to your Favorites</button> : null
          }
        </Link>
        <ListGroup.Item>
          <Planet user={user} planet={planet} alert={alert} />
        </ListGroup.Item>
      </Fragment>
    ))

    return (
      <React.Fragment>
        <Route exact path='/exoplanets2/:pl_name/create-favorite' render={() => (
          <React.Fragment>
            <h3> on /exoplanets/create-favorite </h3>
            <CreateFavorite exoplanets={this.state.exoplanets}/>
          </React.Fragment>
        )}
        />
        <ListGroup>
          <Link to="/favorites">
            {user &&
            <button className="btn btn-primary">Go to Favorites</button>
            }
          </Link>
          {this.state.exoplanets.length ? planetJsx : <li>No Planets Found :(</li>}
        </ListGroup>
      </React.Fragment>
    )
  }
}

export default withRouter(NasaDataTest)
