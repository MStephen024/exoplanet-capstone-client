import React, { Component } from 'react'
import DashHeader1 from './DashHeader1'
import ExoCard1 from './ExoCard1'
import Pagination1 from './Pagination1'
import axios from 'axios'

class Dashboard1 extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentPage: 1,
      exoplanets: [],
      exosPerPage: 174,
      header: '',
      loading: true,
      rngExos: true,
      showModal: false
    }
    this.setCurrentPage = this.setCurrentPage.bind(this)
    // this.onPageChange = this.onPageChange.bind(this)
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

  setCurrentPage (pageNum) {
    this.setState({ currentPage: pageNum })
  }

  render () {
    const { exoplanets, currentPage, exosPerPage } = this.state
    const indexOfLastExo = currentPage * exosPerPage
    const indexOfFirstExo = indexOfLastExo - exosPerPage
    const currentExos = exoplanets.slice(indexOfFirstExo, indexOfLastExo)

    return (
      <div className="ds1-test">
        A blank, plaster background. This will hold each component.

        <DashHeader1
          totalExos={exoplanets.length}
        />

        <div className="exocard-test">
          {currentExos.map(exo => (
            <ExoCard1 key={exo.pl_name}
              plName={exo.pl_name}
              exoName={exo.pl_name}
              discData={exo.pl_disc}
              discFac={exo.pl_facility}
              discMethod={exo.pl_discmethod}
              earthMass={exo.pl_masse}
              user={this.props}
              showModal={this.showModal}
            />
          ))}
        </div>

        <Pagination1
          exosPerPage={exosPerPage}
          exoTotal={exoplanets.length}
          setCurrentPage={this.setCurrentPage}
        />
      </div>
    )
  }
}

export default Dashboard1
