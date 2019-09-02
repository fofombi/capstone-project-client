import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

import PatientForm from './PatientForm'

class UpdatePatient extends Component {
  state = {
    patient: null,
    updated: false
  }
  async componentDidMount () {
    // console.log(this.props.match.params)
    try {
      const response = await axios({
        url: `${apiUrl}/patients/${this.props.match.params.id}`,
        headers: {
          'Authorization': `Bearer ${this.props.user.token}`
        }
      }
      )

      // /(`${apiUrl}/patients/${this.props.match.params.id}`)

      this.setState({
        patient: response.data.patient
      })
    } catch (error) {
      this.props.alert({
        heading: 'Failure!!!!',
        message: 'Failure to do action',
        variant: 'warning'
      })
    }
  }

  // componentDidMount () {
  //   axios(`${apiUrl}/patients/${this.props.match.params.id}`)
  //     .then(response => {
  //       this.setState({ patient: response.data.patient })
  //       console.log(response.data.patient)
  //     })
  //     .catch(() => this.props.alert({
  //       heading: 'Error',
  //       message: 'Something went wrong',
  //       variant: 'danger'
  //     }))
  // }
  //
   handleChange = event => {
     //   // const updatedField = {
     //   //   [event.target.name]: event.target.value
     //   // }
     //   // const editedpatient = Object.assign(this.state.patient, updatedField)
     //   // this.setState({ patient: editedpatient })
     //
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
      method: 'PATCH',
      url: `${apiUrl}/patients/${this.state.patient._id}`,
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
          message: 'You updated a patient.',
          variant: 'success'
        })
        this.props.history.push(`/patients/${this.state.patient._id}`)
      })
      // .catch(console.error)
      .catch(() => this.props.alert({
        heading: 'Error',
        message: 'Something went wrong',
        variant: 'danger'
      }))
  }

  render () {
    if (!this.state.patient) {
      return (
        <h1>Loading... </h1>
      )
    }
    return (
      <PatientForm
        patient={this.state.patient}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default withRouter(UpdatePatient)
