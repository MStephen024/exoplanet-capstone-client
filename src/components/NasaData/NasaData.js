import React, { Component, Fragment } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import { Route, Link, withRouter } from 'react-router-dom'
// import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'

import axios from 'axios'

import CreateFavorite from '../Favorites/CreateFavorite'
// import Test from './Test'

// require('dotenv').config()

class NasaData extends Component {
  constructor (props) {
    super(props)

    this.state = {
      exoplanets: [],
      isLoading: true,
      planetToCreate: {},
      formVisible: false
    }
  }

  // dataCallback = (exoplanets) => {
  //   this.setState({ exoplanets: this.state.exoplanets })
  // }

  async componentDidMount () {
    try {
      // const apiKey = process.env.API_KEY

      const planets = this.state.exoplanets
      const response = await axios('https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&select=pl_name,pl_disc,pl_facility,pl_discmethod,pl_massj,dec&order=dec&format=json')
      console.log(response.data[0])

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

  handleCreateFavoriteClick (planet) {
    console.log(planet)
    console.log(this)
    this.setState({ formVisible: true })
    // get data from incoming args
    // setState planetToCreate with data
  }

  render (props) {
    console.log('these are props in create', this.props)
    const { user } = this.props
    console.log(this.state.exoplanets)

    const planetJsx = this.state.exoplanets.map(planet => (
      <Fragment key={planet.pl_name}>
        <ListGroup.Item>
          <p>
            <b>Planet Name:</b> {planet.pl_name} <br />
            <b>Discovery Year:</b> {planet.pl_disc} <br />
            <b>Discovery Facility:</b> {planet.pl_facility} <br />
            <b>Discovery Method:</b> {planet.pl_discmethod} <br />
            <b>Mass of Jupiter:</b> {planet.massj ? planet.mass : 'Unknown'}
          </p>
        </ListGroup.Item>
        <Link to={`/${planet.pl_name}/create-favorite`}>
          {user
            ? <button onClick={ () => this.handleCreateFavoriteClick({ name: 'test' })} className="btn btn-primary">Add to your Favorites</button> : null
          }
        </Link>
      </Fragment>
    ))
    return (
      <React.Fragment>
        <ListGroup>
          <Link to="/favorites">
            {user &&
            <button className="btn btn-primary">Go to Favorites</button>
            }
          </Link>
          {this.state.exoplanets.length ? planetJsx : <li>No Planets Found :(</li>}
        </ListGroup>

        <h3> Before link </h3>

        <Link to='/exoplanets/create-favorite'> go! </Link>
        { // <button onClick={ () => this.handleCreateFavoriteClick({ name: 'test' })} className="btn btn-primary">Add to your Favorites</button>
        }

        <h3> Before route </h3>
        <Route path='exoplanets/create-favorite' render={() => (
          <React.Fragment>
            <h3> on /exoplanets/create-favorite </h3>
            <CreateFavorite planet={this.state.exoplanets}/>
          </React.Fragment>
        )}
        />
      </React.Fragment>

    )
  }
}

export default withRouter(NasaData)
