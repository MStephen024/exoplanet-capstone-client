import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

class ExoToFave extends Component {
  constructor () {
    super()
    this.state = {

    }
  }

  render () {
    return (
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
          <Button variant="secondary" onClick={this.closeModal}>Back to ExoShowByID</Button>
          <Button variant="primary" onClick={this.addToFaves}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default ExoToFave
