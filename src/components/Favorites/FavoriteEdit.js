import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import FavoriteForm from './FavoriteForm'

class FavoriteEdit extends Component {
  state = {
    favorite: {
      tags: null
    }
  }

  componentDidMount () {
    axios({
      method: 'GET',
      url: `${apiUrl}/favorites/${this.props.match.params.id}`,
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      }
    })
      .then(response => this.setState({ favorite: response.data.favorite }))
      .catch(() => this.props.alert({
        heading: 'Error',
        message: 'Something went wrong',
        variant: 'danger'
      }))
  }

  // event.target.name is just the name of the element targeted!!!
  handleChange = event => {
    this.setState({ favorite: { ...this.state.favorite, [event.target.name]: event.target.value } })
  }

  handleSubmit = event => {
    console.log('this is the state', this.state)
    event.preventDefault()
    axios({
      method: 'PATCH',
      url: `${apiUrl}/favorites/${this.state.favorite._id}`,
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      },
      data: {
        favorite: this.state.favorite
      }
    })
      .then(response => {
        this.props.alert({
          heading: 'Success!!!',
          message: 'You updated a favorite',
          variant: 'success'
        })
        this.props.history.push(`/favorites/${this.state.favorite._id}`)
      })
      .catch(console.error)
  }
  // this goes to FavoriteForm
  render () {
    if (!this.state.favorite) {
      return (
        <h1>Loading...</h1>
      )
    }
    return (
      <FavoriteForm
        favorite={this.state.favorite}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default withRouter(FavoriteEdit)
