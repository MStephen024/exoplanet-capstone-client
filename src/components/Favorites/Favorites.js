import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'

class Favorites extends Component {
  constructor () {
    super()

    this.state = {
      favorites: [],
      _isMounted: false
    }
  }

  componentDidMount () {
    this._isMounted = true
    axios({
      method: 'GET',
      url: `${apiUrl}/favorites`,
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      }
    })
      .then(response => {
        if (this._isMounted) {
          this.setState({
            favorites: response.data.favorites })
        }
      })
  }

  componentWillUnmount () {
    this._isMounted = false
  }

  render () {
    // const { user } = this.props
    // const { favorites } = this.state

    const favoriteJsx = this.state.favorites.map(favorite => (
      <ListGroup.Item key={favorite._id}>
        <h4><b>Tag: </b>{favorite.tags}</h4>
        <b>Planet Name:</b> {favorite.pl_name} <br />
        <b>Discovery Year:</b> {favorite.pl_disc} <br />
        <b>Discovery Facility:</b> {favorite.pl_facility} <br />
        <b>Discovery Method:</b> {favorite.pl_discmethod} <br />
        <b>Mass of Jupiter:</b> {favorite.massj ? favorite.mass : 'Unknown'} <br />
        <Link to={`/favorites/${favorite._id}`}><Button>Show Exoplanet</Button></Link>
      </ListGroup.Item>
    ))

    // let favoriteJsx = ''
    // if (user) {
    //   favoriteJsx = favorites.filter(favorite =>
    //     (user._id === favorite.owner)
    //   ).map(favorite => (
    //     <Fragment key={favorite.pl_name}>
    //       <ListGroup.Item>
    //         {favorite.pl_name} <br />
    //         {favorite.pl_disc} <br />
    //         {favorite.pl_facility} <br />
    //         {favorite.pl_discmethod} <br />
    //         {favorite.massj} <br />
    //         {favorite.tags} <br />
    //         <Link to={`/favorites/${favorite._id}`}><Button>Show Exoplanet</Button></Link>
    //       </ListGroup.Item>
    //     </Fragment>
    //   ))
    // } else {
    //   favoriteJsx = <p>Go Back to Planets and Add Favorites</p>
    // }

    return (
      <ListGroup>
        {this.state.favorites.length ? favoriteJsx : <ListGroup.Item>No Favorites Found</ListGroup.Item>}
      </ListGroup>
    )
  }
}

export default Favorites
