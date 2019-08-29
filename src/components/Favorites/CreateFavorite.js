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
        tags: ''
      }
    }
  }

  componentDidMount () {
    console.log(this.props.planet)
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
       data: this.state
     })
       .then(response => {
         this.props.alert({
           heading: 'Success!',
           message: 'You created a favorite!',
           variant: 'success'
         })
         this.props.history.push(`/favorites/${response.data.favorite._id}`)
       })
       .catch(console.error)
   }

   render () {
     // const { planet } = this.props
     console.log('these are props in create', this.props)
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
