import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

import Button from 'react-bootstrap/Button'

class Patient extends Component {
  state = {
    patient: null
  }

  async componentDidMount () {
    console.log(this.props.match.params)
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

  render () {
    const { patient } = this.state

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
              ? <Button href={`#patients/${patient._id}/edit`}>Edit Patient</Button>
            // <btn onClick={this.deleteHandler.bind(this, i)} className="btn btn-danger btn-sm">Delete</btn>
            // && <Button href={`#patients/${patient._id}/destroy`}>DELETE Patient</Button>

              : ''
            }
          </Fragment>
        )}
      </div>
    )
  }
}

export default withRouter(Patient)
