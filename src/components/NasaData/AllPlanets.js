import React, { Component, Fragment } from 'react'
import axios from 'axios'
import ExoData from './ExoData'
// import { Card } from 'react-bootstrap'

// This class is going to control the component that renders all the planets.
// First, display all the planet information
class AllPlanets extends Component {
  constructor () {
    super()
    this.state = {
      exoplanets: []
    }
  }

  async componentDidMount () {
    try {
      const planets = this.state.exoplanets
      const response = await axios('https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&select=pl_name,pl_disc,pl_facility,pl_discmethod,pl_massj,dec&order=dec&format=json')
      // console.log(response)
      const allPlanets = () => {
        for (let i = 0; i < 20; i++) {
          planets.push(response.data[i])
        }
      }
      allPlanets(response)
      this.setState({ exoplanets: planets })
    } catch (error) {
      console.error(error)
    }
  }

  // <Card key={exo.pl_name} className="mb-3">
  //   <Card.Body className="mb-3">
  //     <Card.Title className="mb-3">{exo.pl_name}</Card.Title>
  //     <Card.Subtitle className="mb-3 text-muted">Discovery Date: {exo.pl_disc}</Card.Subtitle>
  //     <Card.Text>
  //       {exo.pl_facility}
  //     </Card.Text>
  //   </Card.Body>
  //   <Card.Link href="#" className="card-link">Add to Favorites</Card.Link>
  // </Card>

  render () {
    const planetCard = this.state.exoplanets.map(exo => (
      <div key={exo.pl_name} className="testy">
        <h3>Exoplanet Name: {exo.pl_name}</h3>
        <h6>Discovery Date: {exo.pl_disc}</h6>
        <p>Discovery Facility: {exo.pl_facility}</p>
      </div>
    ))
    return (
      <Fragment>
        {console.log(this.state.exoplanets)}
        <ExoData
          key={planetCard.pl_name}
          name={planetCard.pl_name}
          date={planetCard.pl_disc}
          facility={planetCard.pl_facility}
        />
      </Fragment>
    )
  }
}

export default AllPlanets
