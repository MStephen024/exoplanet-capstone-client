import React, { Component } from 'react'
// import DashHeader1 from './DashHeader1'
// import ExoShow from './ExoShow'
import ExoCard from '../Misc/ExoCard'
import Pagination1 from './Pagination1'

import axios from 'axios'
import apiUrl from '../../apiConfig'

class Exoplanets extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentPage: 1,
      exoplanets: [],
      exosPerPage: 174,
      exo: {}
    }
    this.setCurrentPage = this.setCurrentPage.bind(this)
  }

  componentDidMount () {
    axios({
      method: 'GET',
      url: `${apiUrl}/`
    })
      .then(response => {
        this.setState({ exoplanets: response.data })
      })
  }

  handleChange = (e) => {
    e.preventDefault()
  }

  setCurrentPage (pageNum) {
    this.setState({ currentPage: pageNum })
  }

  render () {
    const { exoplanets, currentPage, exosPerPage } = this.state
    const indexOfLastExo = currentPage * exosPerPage
    const indexOfFirstExo = indexOfLastExo - exosPerPage
    const currentExos = exoplanets.slice(indexOfFirstExo, indexOfLastExo)

    const exoCardsJSX = currentExos.map((exo, ind) => (
      <ExoCard
        key={ind}
        exo={exo}
        index={ind}
      />
    ))

    return (
      <div className="exo-backdrop">
        <div><h1 className="text-center dh1-test">Total Exoplanets Showing: {!exoplanets.length ? 'loading new worlds...' : exoplanets.length}</h1></div>

        <div className="card-container">
          {currentExos.length > 0 ? <div className="exocards">{exoCardsJSX}</div> : ''}
        </div>

        <Pagination1
          className="col-md-3"
          exosPerPage={exosPerPage}
          exoTotal={exoplanets.length}
          setCurrentPage={this.setCurrentPage}
          onSubmit={this.handleChange}
        />
      </div>
    )
  }
}

export default Exoplanets
