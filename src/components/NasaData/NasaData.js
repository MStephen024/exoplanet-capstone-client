import React, { Component, Fragment } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
// import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'

import Planet from './Planet'
import axios from 'axios'

// require('dotenv').config()

class NasaData extends Component {
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

  render () {
    const { user, alert } = this.props
    const planetJsx = this.state.exoplanets.map(planet => (
      <Fragment key={planet.pl_name}>
        <ListGroup.Item>
          <Planet user={user} planet={planet} alert={alert} />
        </ListGroup.Item>
      </Fragment>
    ))

    return (
      <React.Fragment>
        <ListGroup>
          {this.state.exoplanets.length ? planetJsx : <li>No Planets Found :(</li>}
        </ListGroup>
      </React.Fragment>
    )
  }
}

export default NasaData
