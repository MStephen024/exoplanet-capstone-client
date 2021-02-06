import React, { Component } from 'react'

// import apiURL from '../../apiConfig'
import axios from 'axios'

class ExoShow extends Component {
  constructor (props) {
    super(props)
    this.state = {
      exo: null
    }
  }

  // componentDidMount () {
  //   // const { match } = this.props
  //   axios(`${apiURL}/exoplanets/${this.props.match.params.id}`)
  //     // .then(response => console.log(response))
  //     .then(response => this.setState({ exo: response }))
  //     .catch(console.error)
  // }

  async componentDidMount () {
    try {
      console.log('hi')
      const response = await axios(`https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&format=json/${this.props.match.params.pl_name}`)
      this.setState({ movie: response.data.movie })
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }

  // addToFaves = async () => {
  //   try {
  //     this.setState({ added: true })
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  render () {
    // const { exo } = this.state
    // let exoJSX = ''

    // if (exo) {
    //   exoJSX = 'full exo info?'
    // } else {
    //   exoJSX = 'Loading Exoplanet info'
    // }

    return (
      <div>
        <h3>Exoplanet Title</h3>
        <button>Add Exo To Faves</button>
      </div>
    )
  }
}

export default ExoShow
