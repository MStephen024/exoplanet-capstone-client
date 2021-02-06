import React, { Component } from 'react'
import DashHeader1 from './DashHeader1'
// import ExoShow from './ExoShow'
// import { Link } from 'react-router-dom'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import Pagination1 from './Pagination1'

import axios from 'axios'

class Exoplanets extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentPage: 1,
      exoplanets: [],
      exosPerPage: 174
    }
    this.setCurrentPage = this.setCurrentPage.bind(this)
  }

  componentDidMount () {
    axios('https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&format=json')
      .then(res => this.setState({ exoplanets: res.data }))
      .catch(err => console.error(err))
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
      <Card key={exo.pl_name} className="card-background" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>
            { /* <Link to={`/exoplanets/${exo.pl_name}`}>{exo.pl_name}</Link> */ }
          </Card.Title>
          <Card.Subtitle>{exo.pl_hostname}</Card.Subtitle>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Facility:{exo.pl_facility}</ListGroupItem>
          <ListGroupItem>Mass of Jupiter: {exo.pl_bmassj ? exo.pl_bmassj : 'N/A'}</ListGroupItem>
          <ListGroupItem>Exo Radiance: {exo.ra}</ListGroupItem>
        </ListGroup>
      </Card>
    ))

    return (
      <div className="ds1-test">
        <DashHeader1
          totalExos={exoplanets.length}
        />

        {currentExos.length > 0 ? <div className="exocard-test">{exoCardsJSX}</div> : 'Loading All Exoplanets...'}
        {console.log(exoplanets)}

        <Pagination1
          exosPerPage={exosPerPage}
          exoTotal={exoplanets.length}
          setCurrentPage={this.setCurrentPage}
          onClick={(e) => e.preventDefault()}
        />
      </div>
    )
  }
}

export default Exoplanets
