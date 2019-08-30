import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

// import Button from 'react-bootstrap/Button'
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
    const { user } = this.props
    const { favorites } = this.state
    console.log(user._id)
    console.log(this.props.user.token)
    let favoriteJsx = ''

    if (user) {
      favoriteJsx = favorites.filter(favorite =>
        (user._id === favorite.owner)
      ).map(favorite => (
        <Fragment key={favorite.pl_name}>
          <ListGroup.Item>
            {favorite.pl_name} <br />
            {favorite.pl_disc} <br />
            {favorite.pl_facility} <br />
            {favorite.pl_discmethod} <br />
            {favorite.massj} <br />
            {favorite.tags} <br />
            <Link to={`/favorites/${favorite._id}`}>{favorite.pl_name}</Link>
          </ListGroup.Item>
        </Fragment>
      ))
    } else {
      favoriteJsx = <p>Go Back to Planets and Add Favorites</p>
    }

    return (
      <ListGroup>
        {this.state.favorites.length ? favoriteJsx : <ListGroup.Item>No Favorites Found</ListGroup.Item>}
      </ListGroup>
    )
  }
}

export default Favorites
