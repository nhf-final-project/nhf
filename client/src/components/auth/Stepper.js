import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import './Stepper.css'


export default class Stepper extends Component {
    render() {
    return (
        <div class="steps-form-2 my-3">
            <div class="steps-row-2 setup-panel-2 d-flex justify-content-between">
                <div class="steps-step-2">
                    <MDBBtn gradient="purple" className="btn btn-amber btn-circle-2 waves-effect ml-0" title="Basic Information" ><i className="far fa-folder-open m-0 p-0" aria-hidden="true"></i></MDBBtn>
                </div>
                <div class="steps-step-2">
                    <MDBBtn gradient="purple" className="btn btn-amber btn-circle-2 waves-effect" title="Personal Data" ><i class="fas fa-pencil-alt" aria-hidden="true"></i></MDBBtn>
                </div>
                <div class="steps-step-2">
                    <MDBBtn gradient="purple" className="btn btn-blue-grey btn-circle-2 waves-effect" title="Terms and Conditions"><i class="far fa-image" aria-hidden="true"></i></MDBBtn>
                </div>
                <div class="steps-step-2">
                    <MDBBtn gradient="purple" className="btn btn-blue-grey btn-circle-2 waves-effect mr-0" title="Finish"><i class="fa fa-check" aria-hidden="true"></i></MDBBtn>
                </div>
            </div>
        </div>
    )
  }
}
