import React, { Component, Fragment } from 'react'
import axios from 'axios'
import * as constants from '../../constants'
import MovieForm from './MovieForm'

class MovieEdit extends Component {
  constructor (props) {
    super(props)
    this.state = {
      movie: {
        title: '',
        director: '',
        year: ''
      }
    }
  }

  async componentDidMount () {
    const response = await axios.get(`${constants.API_BASE_URL}/movies/${this.props.match.params.id}`)
    this.setState({ movie: response.data.movie })
  }

  handleChange = (event) => {
    const editedMovie = { ...this.state.movie, [event.target.name]: event.target.value }

    this.setState({ movie: editedMovie })
  }

  handleSubmit = async (event) => {
    event.preventDefault()

    const movieParams = JSON.stringify({ movie: this.state.movie })
    await axios.put(`${constants.API_BASE_URL}/movies/${this.props.match.params.id}`, movieParams)

    this.props.history.push(`/movies/${this.state.movie.id}/show`)
  }

  render () {
    const { movie } = this.state

    return (
      <Fragment>
        <MovieForm
          action="edit"
          movie={movie}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </Fragment>
    )
  }
}

export default MovieEdit
