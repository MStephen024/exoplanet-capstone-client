import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

import Button from 'react-bootstrap/Button'

class Favorite extends Component {
 state= {
   favorite: null,
   favoriteDeleted: null
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
 }

 deleteFavorite = () => {
   axios({
     method: 'DELETE',
     url: `${apiUrl}/favorites/${this.props.match.params.id}`,
     headers: {
       'Authorization': `Token token=${this.props.user.token}`
     }
   })
     .then(response => {
       this.setState({ favoriteDeleted: true })
     })
     .then(response => {
       this.props.alert({
         heading: 'Success!!!!!!',
         message: 'You deleted your favorite!',
         variant: 'success'
       })
       this.props.history.push('/favorites')
     })
     .catch(console.error)
 }

 render () {
   const { favorite } = this.state

   return (
     <div>
       { favorite && (
         <Fragment>
           <h1>{favorite.tags}</h1>
           {(this.props.user && favorite) && this.props.user._id === favorite.owner
             ? <Button href={`#favorites/${favorite._id}/edit`}>Edit Tags</Button>
             : ''
           }
           <Button variant="danger" onClick={this.deleteFavorite}>
            Delete Favorite
           </Button>
         </Fragment>
       )}
     </div>
   )
 }
}

export default withRouter(Favorite)
