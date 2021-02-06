import React, { Component } from 'react'
// import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

import AddToFavesForm from './AddToFavesForm'
import Button from 'react-bootstrap/Button'

// Sync this up with the variable names of ExoData you want as each Item.
class AddToFaves extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false,
      favorite: {
        planet: null,
        tags: '',
        pl_name: '',
        pl_disc: '',
        pl_facility: '',
        pl_discmethod: '',
        massj: ''
      }
    }
    this.showModal = this.showModal.bind(this)
  }

  // async componentDidMount () {
  //   try {
  //     const favorite = { planet: this.props.planet }
  //     favorite.pl_name = favorite.planet.pl_name
  //     favorite.pl_disc = favorite.planet.pl_disc
  //     favorite.pl_facility = favorite.planet.pl_facility
  //     favorite.pl_discmethod = favorite.planet.pl_discmethod
  //     favorite.massj = favorite.planet.massj
  //     this.setState({ favorite })
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  showModal = () => {
    this.setState({ showModal: true })
  }

  closeModal = () => {
    this.setState({ showModal: false })
  }

  handleChange = event => {
    this.setState({ favorite: { ...this.state.favorite, [event.target.name]: event.target.value } })
  }

  handleSubmit = event => {
    event.preventDefault()
    axios({
      method: 'POST',
      url: `${apiUrl}/favorites`,
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      },
      data: this.state.favorite
    })
    // maybe add a ".then" to include closing the modal after submit. if so, u a G!
      .then(response => {
        this.props.alert({
          heading: 'Success!',
          message: 'You created a favorite!',
          variant: 'success'
        })
        this.props.history.push('/favorites')
      })
      .catch(() => {
        this.props.alert({
          heading: 'Error',
          message: 'You were unable to look at favorites, Try Again!',
          variant: 'danger'
        })
      })
  }

  render () {
    const { user } = this.props
    return (
      <div>
        {user && <Button variant="primary" onClick={this.showModal}>Add To Favorites</Button>}

        {user &&
          <AddToFavesForm
            handleChange={this.state.handleChange}
            handleSubmit={this.state.handleSubmit}
            showModal={this.state.showModal}
            closeModal={this.state.closeModal}
            tags={this.state.tags}
          />}
      </div>
    )
  }
}

export default AddToFaves
