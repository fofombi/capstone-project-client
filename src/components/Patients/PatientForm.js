import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const PatientForm = ({ patient, handleChange, handleSubmit }) => (
  <Form onSubmit={handleSubmit}>

    <Form.Group controlId="mrn">
      <Form.Label>Patient Medical Record Number</Form.Label>
      <Form.Control
        type="integer"
        placeholder="Enter Patient Medical Record Number"
        value={patient.mrn}
        onChange={handleChange}
        name="mrn"
        required
      />
    </Form.Group>

    <Form.Group controlId="lastName">
      <Form.Label>Patient Last Name</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter Patient's Last Name"
        value={patient.lastName}
        onChange={handleChange}
        name="lastName"
        required
      />
    </Form.Group>

    <Form.Group controlId="firstName">
      <Form.Label>Patient First Name</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter Patient's First Name"
        value={patient.firstName}
        onChange={handleChange}
        name="firstName"
        required
      />
    </Form.Group>

    <Form.Group controlId="test">
      <Form.Label>Lab Test</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter the Lab Test"
        value={patient.test}
        onChange={handleChange}
        name="test"
        required
      />
    </Form.Group>

    <Form.Group controlId="grossDescription">
      <Form.Label>Specimens Description</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter Specimens  Gross Description"
        value={patient.grossDescription}
        onChange={handleChange}
        name="grossDescription"
        required
      />
    </Form.Group>

    <Form.Group controlId="collectionDate">
      <Form.Label>Date of Specimen Collection</Form.Label>
      <Form.Control
        type="date"
        placeholder="Enter Date of Specimen Collection"
        value={patient.collectionDate}
        onChange={handleChange}
        name="collectionDate"
        required
      />
    </Form.Group>

    <Form.Group controlId="serviceDate">
      <Form.Label>Date of Service</Form.Label>
      <Form.Control
        type="date"
        placeholder="Enter Date of Service"
        value={patient.serviceDate}
        onChange={handleChange}
        name="serviceDate"
        required
      />
    </Form.Group>

    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
)

export default PatientForm
