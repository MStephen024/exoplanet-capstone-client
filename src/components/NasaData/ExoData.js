import React, { Fragment } from 'react'
import AddToFaves from '../Favorites/AddToFaves'
// import Pagination from './Pagination'
// import ExoButton from './ExoCard'

import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
// import FavoriteForm from '../Favorites/FavoriteForm'

// Needs to be a class component. Will eventually only hold the body of the card + API call.
// If no Header, then no card. But can have header, and no body because its based
// on specific fields. But can still have button.
const ExoData = ({ exoName, discData, discFac, discMethod, jupiterMass }) => {
  return (
    <Fragment>
      <Card className="cardFrame" style={{ width: '20rem' }}>
        <Card.Body>
          { /* <ExoHeader /> */ }
          <Card.Title>{exoName}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{discData}</Card.Subtitle>
        </Card.Body>
        <ListGroup>
          { /* <ExoData - a passed in functional component that renders a fragment of ListGroup.Item/> */}
          <ListGroup.Item>{discFac}</ListGroup.Item>
          <ListGroup.Item>{discMethod}</ListGroup.Item>
          <ListGroup.Item>{jupiterMass}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <AddToFaves />
        </Card.Body>
      </Card>
    </Fragment>
  )
}

// Passing down: Header titles for Fave, All ExoData, Anything needed for CreateFave/Modal/Form.

export default ExoData
