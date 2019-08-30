import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import FavoriteForm from './FavoriteForm'

class CreateFavorite extends Component {
  constructor (props) {
    super(props)
    this.state = {
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
  }

  componentDidMount () {
    const favorite = { planet: this.props.planet }
    favorite.pl_name = favorite.planet.pl_name
    favorite.pl_disc = favorite.planet.pl_disc
    favorite.pl_facility = favorite.planet.pl_facility
    favorite.pl_discmethod = favorite.planet.pl_discmethod
    favorite.massj = favorite.planet.massj
    this.setState({ favorite })
  }

   handleChange = event => {
     this.setState({ favorite: { ...this.state.favorite, [event.target.name]: event.target.value } })
   }

   handleSubmit = event => {
     event.preventDefault()
     console.log(this.state)
     axios({
       method: 'POST',
       url: `${apiUrl}/favorites`,
       headers: {
         'Authorization': `Token token=${this.props.user.token}`
       },
       data: this.state
     })
       .then(response => {
         this.props.alert({
           heading: 'Success!',
           message: 'You created a favorite!',
           variant: 'success'
         })
         console.log(response.data)
         // this.props.history.push(`/favorites/${response.data.favorite.planet._id}`)
       })
       .catch(console.error)
   }

   render () {
     // const { planet } = this.props

     return (
       <div>
         Create Favorite Form
         <FavoriteForm
           handleChange={this.handleChange}
           handleSubmit={this.handleSubmit}
           favorite={this.state.favorite}
         />
       </div>
     )
   }
}

export default withRouter(CreateFavorite)
