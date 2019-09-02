import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

import ListGroup from 'react-bootstrap/ListGroup'
import Spinner from 'react-bootstrap/Spinner'

class Patients extends Component {
  constructor () {
    super()

    this.state = {
      patients: [],
      isLoading: false
    }
  }

  async componentDidMount () {
    try {
      // await the response from API call
      const response = await axios({
        url: `${apiUrl}/patients/`,
        // method: 'GET',
        headers: {
          'Authorization': `Bearer ${this.props.user.token}`
        }
      })
      // do something with response

      // this.setState({ patients: response.data.patients })
      this.setState({ patients: response.data.patients, isLoading: false })
    } catch (error) {
      this.props.alert({
        heading: 'Failure!!!!',
        message: 'Failure to do action',
        variant: 'warning'
      })
    }
  }
  handleSubmit = event => {
    event.preventDefault()

    const token = this.props.user.token
    axios({
      method: 'POST',
      url: `${apiUrl}/patients`,
      headers: {
        'Authorization': `Bearer ${token}`
      },
      data: {
        patient: this.state.patient
      }
    })
      .then(response => {
        this.props.alert({
          heading: 'Success!!!!',
          message: 'Here are the patients.',
          variant: 'success'
        })
        this.props.history.push(`/patients/${response.data.patient._id}`)
      })
    //  .catch(console.error)
      .catch(() => {
        this.props.alert({
          heading: 'Failure!!!!',
          message: 'You fail to show  patients.',
          variant: 'warning'
        })
      })
  }

  render () {
    const patientsJsx = this.state.patients.map(patient => (

      <ListGroup.Item key={patient._id}>
        <Link to={`/patients/${patient._id}`}>{patient.lastName}{', '}{patient.firstName}</Link>
      </ListGroup.Item>
      // <Link to={`/patients/${patient._id}`} >{patient.lastName}</Link>

    ))

    if (this.state.isLoading) {
      return (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
        </div>
      )
    }

    return (
      <ListGroup>
        {this.state.patients.length
          ? patientsJsx
          : <ListGroup.Item>No patients found</ListGroup.Item>
        }
      </ListGroup>
    )
  }
}

export default Patients
