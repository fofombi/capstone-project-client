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

        //  method: 'GET',
        url: `${apiUrl}/patients/`,
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${this.props.user.token}`
        }
      })
      // do something with response

      // this.setState({ patients: response.data.patients })
      this.setState({ patients: response.data.patients, isLoading: false })
    } catch (error) {
      console.error(error)
    }
  }

  render () {
    //     let patientsJsx
    //     if (this.state.patients.length === 0) {
    //       patientsJsx = (
    //         <ListGroup.Item className="text-center list">No patient  foun! </ListGroup.Item>
    //       )
    //     } else {
    //       patientsJsx = this.state.patients.map(patient => (
    //         <ListGroup.Item className='text-center list' key={patient._id}>
    //           <Link to={`/patients/${patient._id}`}>{patient.title}</Link></ListGroup.Item>
    //       ))
    //     }
    //     return (
    //       <ListGroup>
    //         { patientsJsx }
    //       </ListGroup>
    //     )
    //   }
    // }
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
