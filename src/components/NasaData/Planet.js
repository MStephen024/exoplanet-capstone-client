import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

import CreateFavorite from '../Favorites/CreateFavorite'

class Planet extends Component {
  constructor (props) {
    super(props)

    this.state = {
      planet: null,
      formVisible: false
    }
  }

  goToCreate (planet) {
    console.log(planet)
    this.setState({ formVisible: true })
  }

  render () {
    const { planet, goToCreate } = this.state
    const { user } = this.props

    const planetJsx =
    <ListGroup.Item>
      <p>
        <b>Planet Name:</b> {planet.pl_name} <br />
        <b>Discovery Year:</b> {planet.pl_disc} <br />
        <b>Discovery Facility:</b> {planet.pl_facility} <br />
        <b>Discovery Method:</b> {planet.pl_discmethod} <br />
        <b>Mass of Jupiter:</b> {planet.massj ? planet.mass : 'Unknown'}
      </p>

      <Button onClick={goToCreate}>
        Add This Planet To Stephens Favorites
      </Button>
      {this.state.formVisible &&
      <CreateFavorite
        user={user} planet={planet}
      />
      }
    </ListGroup.Item>

    return (planetJsx)
  }
}

export default withRouter(Planet)
