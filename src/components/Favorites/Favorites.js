import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

import ListGroup from 'react-bootstrap/ListGroup'

class Favorites extends Component {
  constructor () {
    super()

    this.state = {
      favorites: []
    }
  }

  async componentDidMount () {
    try {
      const response = await axios(`${apiUrl}/favorites`)
      console.log(response)
      this.setState({ favorites: response.data })
    } catch (error) {
      console.error(error)
    }
  }

  render () {
    const { user } = this.props
    const favoriteJsx = this.state.favorites.map(favorite => (
      <Fragment key={favorite.pl_name}>
        <ListGroup.Item >
          <h1>Test</h1>
        </ListGroup.Item>
        <Link to="/create-favorite">
          {user &&
          <button className="btn btn-primary">Add to your Favorites</button>
          }
        </Link>
      </Fragment>
    ))

    return (
      <Fragment>
        <h1>Favorites</h1>
        <Link to="/create-favorite">
          {user &&
          <button className="btn btn-primary">Create New Favorite</button>
          }
          {this.state.favorites.length ? favoriteJsx : <button>No Favorites, Make Some</button>}
        </Link>
      </Fragment>
    )
  }
}

export default Favorites
