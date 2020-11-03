import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'

class Favorites extends Component {
  constructor () {
    super()

    this.state = {
      favorites: []
    }
  }

  componentDidMount () {
    axios({
      method: 'GET',
      url: `${apiUrl}/favorites`,
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      }
    })
      .then(response => this.setState({ favorites: response.data.favorites }))
  }

  render () {
    let favoritesJsx = ''
    const { user } = this.props
    let { favorites } = this.state

    if (favorites) {
      favorites = favorites.filter(favorite => user._id === favorite.owner)
      const thisUserFavorites = favorites.length
      if (thisUserFavorites) {
        favoritesJsx = favorites.map(favorite => (
          <Card key={favorite.pl_name} style={{ width: '18rem' }}>
            <Card.Img variant="top" style={{ height: 250, padding: '.5rem' }}/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                {favorite.pl_name} <br />
                {favorite.pl_disc} <br />
                {favorite.pl_facility} <br />
                {favorite.pl_discmethod} <br />
                {favorite.massj} <br />
                {favorite.tags} <br />
                <Link to={`/favorites/${favorite._id}`}><Button>Edit Favorite</Button></Link>
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))
      } else {
        favoritesJsx = <p>Press Home and Go Add Some Favorites</p>
      }
    }

    return (
      <ListGroup>
        {favoritesJsx}
      </ListGroup>
    )
  }
}

export default Favorites
