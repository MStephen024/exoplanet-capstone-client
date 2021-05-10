import React from 'react'
import { Link } from 'react-router-dom'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
// import ExoShow from '../ExoplanetsRoutes/'

const ExoCard = ({ exo, index }) => (
  <Card key={index} className="card-background">
    <Card.Body>
      <Card.Title>
        <Link to={`/exoplanets/${index}`}>{exo.pl_name}</Link>
      </Card.Title>
      <Card.Subtitle>{exo.pl_hostname}</Card.Subtitle>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroupItem>Age of Host Star(Gyr): {exo.st_age ? exo.st_age : 'N/A'}</ListGroupItem>
      <ListGroupItem>Discovery Year: {exo.disc_year ? exo.disc_year : 'N/A'}</ListGroupItem>
      <ListGroupItem>Planet Mass (Earth Mass): {exo.pl_masse ? exo.pl_masse : 'N/A'}</ListGroupItem>
    </ListGroup>
  </Card>
)

export default ExoCard
