// Maybe make this component the state component(Fails Rule #1) to render the whole card in a div with CSS.
// If no Exoheader, then no Exocard altogether. If no Exocard, Only ExoHeader and button. And
// if already a Fave, no button.
import React from 'react'
// import Card from 'react-bootstrap/Card'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
// import ExoHeader from './ExoHeader'
import ExoButton from './ExoButton'
// import AddToFaves from '../Favorites/AddToFaves'
// import axios from 'axios'

// Should hold the api call? pass the exo info down to ExoData to load into each sect.
const ExoCard = ({ exoName, discData, discFac, discMethod, earthMass, user, showModal }) => {
  // pass down the data on each exo to ExoData to fill in the fields needs on the card.
  // exoHeader will always have a title so no need for that extra logic
  return (
    <div>
      <Card className="card-background" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{exoName}</Card.Title>
          <Card.Subtitle>{earthMass}</Card.Subtitle>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{exoName}</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>{discMethod}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <ExoButton
            user={user}
            showModal={showModal}
          />
        </Card.Body>
      </Card>
    </div>
  )
}

export default ExoCard
