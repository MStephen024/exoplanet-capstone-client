import React, { Fragment } from 'react'
// import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

// Change Form.Group to a Modal.
// This will be THE NEWWWWWWW ExoButton included with the form to add to Faves
const AddToFavesForm = ({ favorite, showModal, closeModal, handleChange, handleSubmit, tags }) => {
  const formContent =
    <Modal showModal={showModal} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Give this exoplanet a tag?</Modal.Title>
      </Modal.Header>
      { /* Make this an input (form element) */ }
      <Modal.Body>
        <input type="text" onChange={handleChange} />
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>Close</Button>
        <Button variant="primary" onClick={handleSubmit}>Save Changes</Button>
      </Modal.Footer>
    </Modal>
  return (
    <Fragment>
      {formContent}
    </Fragment>
  )
}

// <Form onSubmit={handleSubmit}>
//   <Form.Group controlId="tags">
//     <Form.Label>Tags</Form.Label>
//     <Form.Control
//       type="text"
//       placeholder="Enter Tags"
//       value={favorite.tags || ''}
//       onChange={handleChange}
//       name="tags"
//       required
//     />
//   </Form.Group>
// </Form>

export default AddToFavesForm
