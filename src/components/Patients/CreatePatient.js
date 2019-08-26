import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

import PatientForm from './PatientForm'

class CreatePatient extends Component {
  state = {
    patient: {
      mrn: '',
      lastName: '',
      firstName: '',
      test: '',
      grossDescription: '',
      collectionDate: '',
      serviceDate: ''
    }
  }

  handleChange = event => {
    // const updatedField = {
    //   [event.target.name]: event.target.value
    // }
    // const editedpatient = Object.assign(this.state.patient, updatedField)
    // this.setState({ patient: editedpatient })

    this.setState({
      patient: {
        ...this.state.patient,
        [event.target.name]: event.target.value
      }
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    axios({
      method: 'POST',
      url: `${apiUrl}/patients`,
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      },
      data: {
        patient: this.state.patient
      }
    })
      .then(response => {
        this.props.alert({
          heading: 'Success!!!!',
          message: 'You created a patient.',
          variant: 'success'
        })
        this.props.history.push(`/patients/${response.data.patient._id}`)
      })
      .catch(console.error)
  }

  render () {
    return (
      <PatientForm
        patient={this.state.patient}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default withRouter(CreatePatient)
