import React, { Component } from 'react'
// import apiUrl from '../../apiConfig'
// import Spinner from 'react-bootstrap/Spinner'

import DashHeader from './DashHeader'
import ExoCard from './ExoCard'
import Pagination from './Pagination'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

class Dashboard extends Component {
  constructor (props) {
    super(props)

    this.state = {
      currentPage: 1,
      exosPerPage: 150,
      rngExos: true,
      header: '',
      loading: true,
      showModal: false,
      exoplanets: []
    }
    this.setCurrentPage = this.setCurrentPage.bind(this)
    this.onPageChange = this.onPageChange.bind(this)
    // this.onPageChange = this.onPageChange.bind(this)
    // this.onPageChange = this.onPageChange.bind(this)
  }

  // Create method to handle the rngExos if true by default until update with user?
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

  showModal = () => {
    this.setState({ showModal: true })
  }

  closeModal = () => {
    this.setState({ showModal: false })
  }

  onPageChange (event) {
    event.preventDefault()
  }

  setCurrentPage (pageNum) {
    this.setState({ currentPage: pageNum })
  }

  handleChange = event => {
    this.setState({
      favorite: { tags: event.target.value }
    })
  }

  render () {
    const { exoplanets, currentPage, exosPerPage } = this.state
    const indexOfLastExo = currentPage * exosPerPage
    const indexOfFirstExo = indexOfLastExo - exosPerPage
    const currentExos = exoplanets.slice(indexOfFirstExo, indexOfLastExo)

    // const paginate = pageNum => this.setCurrentPage(pageNum)

    // const loadingSpinner =
    //   <Spinner animation="border" role="status">
    //     <span className="sr-only">Loading...</span>
    //   </Spinner>

    // This is going to only display ExoCard and Pagination.
    // ExoCard displays DashHeader, Body, Button.
    // If user, { return current divHTML } else { return RNG exos}
    return (
      <div className="dashFlex">
        { /* False DashHeader if rngExos is true */ }
        <DashHeader
          header={this.state.header}
        />
        {currentExos.map(exo => (
          <ExoCard
            key={exo.pl_name}
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
        <Pagination
          onClick={this.onPageChange}
          exosPerPage={exosPerPage}
          totalExos={exoplanets.length}
          setCurrentPage={this.setCurrentPage}
        />
        <Modal show={this.state.showModal}
          onHide={this.closeModal}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title>Give this exoplanet a tag?</Modal.Title>
          </Modal.Header>
          { /* Make this an input (form element) */ }
          <Modal.Body>
            <input type="text" onChange={this.handleChange} />
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeModal}>Close</Button>
            <Button variant="primary" onClick={this.handleSubmit}>Save Changes</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default Dashboard
