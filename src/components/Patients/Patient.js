import React, { Component, Fragment } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

import Button from 'react-bootstrap/Button'

class Patient extends Component {
  state = {
    patient: null,
    deleted: false
  }

  async componentDidMount () {
    // console.log(this.props.match.params)
    try {
      const response = await axios({
        method: 'GET',
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
      console.error(error)
    }
  }
  // ----DELETE....
  // const { user, patient } = this.props
  // const { deleted } = this.statE
  delete = async () => {
    try {
      await axios.delete(`${apiUrl}/patients/${this.props.match.params.id}`)
      this.setState({ deleted: true })

    // .then(response => {
    //   this.props.alert({
    //     heading: 'Success!!!!',
    //     message: 'You deleted a patient.',
    //     variant: 'success'
    //   })
    } catch (error) {
      console.error(error)
    }
  }

  handleDelete = event => {
    event.preventDefault()
    axios({
      method: 'DELETE',
      url: `${apiUrl}/patients/${this.props.match.params.id}`,
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      }
    })
      .then(this.setState({ deleted: true
        // then(response => {
        //   this.props.alert({
        //     heading: 'Success!!!!',
        //     message: 'You deleted a patient.',
        //     variant: 'success'
        // })
      }))

      .catch(console.error)
  }

  render () {
    const { patient, deleted } = this.state
    if (deleted) {
      return <Redirect to={
        {
          pathname: '/patients',
          state: {
            msg: 'Patient successfully deleted! Yay.'
          }
        }
      }/>
    }
    return (
      <div>
        { patient && (
          <Fragment>
            <h2>{patient.mrn}</h2>
            <h2>{patient.lastName}</h2>
            <h2>{patient.firstName}</h2>
            <h2>{patient.test}</h2>
            <h2>{patient.grossDescription}</h2>
            <h2>{patient.collectionDate}</h2>
            <h2>{patient.serviceDate}</h2>
            {(this.props.user && patient) && this.props.user._id === patient.owner
              ? (
                <Fragment>
                  <Button href={`#patients/${patient._id}/edit`}>Edit Patient</Button>
                  <Button onClick={this.handleDelete} className="btn btn-danger">DELETE Patient</Button>
                </Fragment>
              )

              : ''
            }
          </Fragment>
        )}
      </div>
    )
  }
}

export default withRouter(Patient)
