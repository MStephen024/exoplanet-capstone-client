import React, { Component, Fragment } from 'react'
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
          <Fragment key={favorite.pl_name}>
            <ListGroup.Item>
              {favorite.pl_name} <br />
              {favorite.pl_disc} <br />
              {favorite.pl_facility} <br />
              {favorite.pl_discmethod} <br />
              {favorite.massj} <br />
              {favorite.tags} <br />
              <Link to={`/favorites/${favorite._id}`}><Button>Edit Favorite</Button></Link>
            </ListGroup.Item>
          </Fragment>
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
