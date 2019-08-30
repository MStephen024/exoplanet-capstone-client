import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const FavoriteForm = ({ favorite, handleChange, handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <Form.Group controlId="tags">
      <Form.Label>Tags</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter Tags"
        value={favorite.tags}
        onChange={handleChange}
        name="tags"
        required
      />
    </Form.Group>

    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
)

export default FavoriteForm
