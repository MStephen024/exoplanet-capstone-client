import React from 'react'
import Button from 'react-bootstrap/Button'

const ExoButton = ({ user, handleSubmit, showModal }) => {
  return (
    <Button variant="primary" type="submit" to="/" onClick={showModal}>Add To Favorites</Button>
  )
}

export default ExoButton
