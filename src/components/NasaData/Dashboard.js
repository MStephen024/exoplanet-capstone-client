import React, { Component } from 'react'
import axios from 'axios'
import Planet1 from './Planet1'
import Pagination1 from './Pagination'

class Dashboard extends Component {
  constructor () {
    super()

    this.state = {
      loading: false,
      exoplanets: [],
      currentPage: 1,
      exosPerPage: 80,
      rngExos: null
    }
    this.setCurrentPage = this.setCurrentPage.bind(this)
  }

  async componentDidMount () {
    try {
      this.setState({ loading: true })
      const response = await axios('https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&format=json')
      this.setState({ exoplanets: response.data })
      this.setState({ loading: false })
    } catch (error) {
      console.error(error)
    }
  }

  onPageChange (event) {
    event.preventDefault()
  }

  setCurrentPage (pageNum) {
    this.setState({ currentPage: pageNum })
  }

  render () {
    const { exoplanets, currentPage, exosPerPage } = this.state
    const indexOfLastExo = currentPage * exosPerPage
    const indexOfFirstExo = indexOfLastExo - exosPerPage
    const currentExos = exoplanets.slice(indexOfFirstExo, indexOfLastExo)

    // const paginate = pageNum => this.setCurrentPage(pageNum)

    return (
      <div className="card-background">
        {currentExos.map(exo => (
          <Planet1
            key={exo.pl_name}
            plName={exo.pl_name}
          />
        ))}
        <Pagination1
          onClick={this.onPageChange}
          exosPerPage={exosPerPage}
          totalExos={exoplanets.length}
          setCurrentPage={this.setCurrentPage}
        />
      </div>
    )
  }
}

export default Dashboard
