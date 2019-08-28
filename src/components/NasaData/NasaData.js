import React, { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import axios from 'axios'

require('dotenv').config()

class NasaData extends Component {
  constructor () {
    super()

    this.state = {
      exoplanets: [],
      isLoading: true
    }
  }

  async componentDidMount () {
    try {
      // const apiKey = process.env.API_KEY

      // dery was here
      const planets = this.state.exoplanets
      const response = await axios('https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&select=pl_hostname,pl_disc,pl_name,dec&order=dec&format=json')
      console.log(response)
      console.log(response.data[0])

      // dery was here too
      const thePlanets = function (response) {
        for (let i = 0; i < 99; i++) {
          planets.push(response.data[i])
        }
        console.log(planets)
      }

      thePlanets(response)

      this.setState({ exoplanets: planets })
    } catch (error) {
      console.error(error)
    }
  }

  render () {
    console.log(this.state.exoplanets)
    const planetJsx = this.state.exoplanets.map(planet => (
      <ListGroup.Item as="a" href='#' key={planet.pl_name}>
        {planet.pl_name}
      </ListGroup.Item>
    ))
    return (
      <ListGroup>
        <h1>TEST</h1>
        {this.state.exoplanets.length ? planetJsx : <li>No Planets Found :(</li>}
      </ListGroup>
    )
  }
}

export default NasaData
