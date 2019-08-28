// import React, { Component } from 'react'
// import { Link, Redirect } from 'react-router-dom'
// import axios from 'axios'
// import { withRouter } from 'react-router-dom'
// import ListGroup from 'react-bootstrap/ListGroup'
// import apiUrl from '../../apiConfig'

// export default class List extends Component {

//     // * snip *

//     onDelete(id) {
//         deletePatientForm(id)
//             .then((data) => {
//                 let patientForm = this.state.patientForm.filter((patient) => {
//                     return id !== patient.id
//                 });

//                 this.setState(state => {
//                     state.patientForm = patientForm;
//                     return state;
//                 });
//             })
//             .catch((err) => {
//                 console.error('err', err)
//             });
//     }

// //     render() {
// //         return (
// //             <div>
// //                 <PatientForm patientForm={this.state.patientForm}
// //           onDelete={this.onDelete.bind(this)}
// //                 />
// //       </div>
// //     ))
// //     }
// // }

// // class DeletePatient extends Component {
// //   // constructor
// //   constructor (props) {
// //     // super call
// //     super(props)
// //
// //     this.state = {
// //       patient: null,
// //       deleted: false
// //     }
// //   }
// //
// //   componentDidMount () {
// //   const { match } = this.props
// //   axios(`${apiUrl}/patients/${match.params.id}`)
// //     .then(res => this.setState({ patient: res.data.patient }))
// //     .catch(console.error)
// //     }
// //
// // handleDelete = (id) => {
// // axios({
// // method: 'DELETE',
// // url: `${apiUrl}/patients/${id}`,
// // headers: {
// // 'Authorization': `Bearer ${this.props.user.token}`
// // }
// // })
// // .then(this.setState({ deleted: true }))
// // .catch(console.error)
// // }
// //
// //   // render
// //
// //   render () {
// //     const { patient, deleted } = this.state
// //     const { user } = this.props
// //
// //     let patientJsx
// //     let Delete
// //
// //     if (deleted) {
// //       return <Redirect to={
// //         {
// //           pathname: '/'
// //         }
// //       }/>
// //     } else if (patient) {
// //       console.log(this.state)
// //       Delete =
// //       <Fragment>
// //         <Button onClick={this.deletePatient}>Delete This Patient</Button>
// //       </Fragment>
// //
// //       patientJsx =
// //       <div>
// //         { patient && (
// //           <Fragment>
// //           <h2>{patient.mrn}</h2>
// //                   <h2>{patient.lastName}</h2>
// //                   <h2>{patient.firstName}</h2>
// //                   <h2>{patient.test}</h2>
// //                   <h2>{patient.grossDescription}</h2>
// //                   <h2>{patient.collectionDate}</h2>
// //                   <h2>{patient.serviceDate}</h2>
// //             {(this.props.user && patient) && this.props.user._id === patient.owner
// //               ? Delete
// //               : ''
// //             }
// //             <patients user={user} alert={alert} patient={patient} />
// //           </Fragment>
// //         )}
// //       </div>
// //     } else {
// //       patientJsx = (
// //         'Loading....'
// //       )
// //     }
// //
// //     return (
// //       <div>{patientJsx}</div>
// //     )
// //   }
//   export default withRouter(DeletePatient)
