import React, { Component } from 'react'
import ExoTableSystem from '../Misc/ExoTableSystem'
import ExoTablePlanet from '../Misc/ExoTablePlanet'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

import axios from 'axios'
import apiUrl from '../../apiConfig'

class ExoShow extends Component {
  constructor (props) {
    super(props)
    this.state = {
      planet: {}
    }
  }

  componentDidMount () {
    axios({
      method: 'GET',
      url: `${apiUrl}/exoplanets/${this.props.match.params.id}`
    })
      .then(response => {
        this.setState({ planet: response.data })
      })
  }

  handleChange = (e) => {
    e.preventDefault()
  }

  render () {
    const { planet } = this.state
    return (
      <div className="exo-backdrop">
        <div className="show-container">
          <div className="text-center name-img">
            <h1>{planet.pl_name}</h1>
          </div>
          <div className="table-container">
            <ExoTableSystem
              moonNum={planet.sy_mnum}
              exoNum={planet.sy_pnum}
              starNum={planet.sy_snum}
              stellarRad={planet.st_rad}
              starAge={planet.st_age}
              starDens={planet.st_dens}
              rowupdate={planet.rowupdate}
            />
            <ExoTablePlanet
              discMethod={planet.discoverymethod}
              discYear={planet.disc_year}
              discFac={planet.disc_facility}
              discTele={planet.disc_telescope}
              earthMass={planet.pl_masse}
              orbitPer={planet.pl_orbper}
              exoRad={planet.pl_rade}
            />
          </div>
        </div>
        <Link to="/">
          <Button variant="primary" onSubmit={this.handleChange}>Back to Exoplanets</Button>
        </Link>
      </div>
    )
  }
}

export default ExoShow
