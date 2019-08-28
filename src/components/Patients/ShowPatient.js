// import React, { Component, Fragment } from 'react'
// import { withRouter, Redirect } from 'react-router-dom'
// import axios from 'axios'
// import apiUrl from '../../apiConfig'
//
// import Button from 'react-bootstrap/Button'
//
// class ShowPatient extends Component {
//   isMounted = false
//
//   constructor () {
//     super()
//
//     this.state = {
//       isLoading: true,
//     }
//   }
//
//   handleChange = event => this.setState({
//     [event.target.name]: event.target.value
//   })
//   componentDidMount () {
//       this._isMounted = true
//     }
//
//     componentWillUnmount () {
//       this._isMounted = false
//     }
// render (){
//   const { patients} = this.state
//   if (!patient){
//     return ( patient )
//   } else if (empty){
//     return (
//      <div className="There is no Patient to display">
//      <Fragment>
//        <Nav.Link to="/">Patients</Nav.Link>
//      </Fragment>
//      </div>
// )
//   }
// }
// export default ShowPatient
