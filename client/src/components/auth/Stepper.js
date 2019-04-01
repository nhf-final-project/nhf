import React, { Component } from 'react'
import { MDBBtn, MDBTooltip } from 'mdbreact';
import './Stepper.css'


export default class Stepper extends Component {

    state = {
        formActivePanel1: 1,
        formActivePanel1Changed: false,
      }

    swapFormActive = (a) => (param) => (e) => {
        this.setState({
          ['formActivePanel' + a]: param,
          ['formActivePanel' + a + 'Changed']: true
        });
      }

    render() {
    return (
        <div class="steps-form-2 my-3">
            <div class="steps-row-2 setup-panel-2 d-flex justify-content-between">
                <div class="steps-step-2">
                    <MDBTooltip placement="top" tooltipContent="Basic Information"><MDBBtn gradient="peach" className="btn btn-amber btn-circle-2 waves-effect ml-0" title="Basic Information" ><i className="far fa-folder-open m-0 p-0" aria-hidden="true" onClick={this.swapFormActive(1)(1)} /></MDBBtn></MDBTooltip>
                </div>
                <div class="steps-step-2">
                    <MDBTooltip placement="top" tooltipContent="Personal Data"><MDBBtn gradient="purple" className="btn btn-amber btn-circle-2 waves-effect" title="Personal Data" ><i class="fas fa-pencil-alt" aria-hidden="true" onClick={this.swapFormActive(1)(2)} /></MDBBtn></MDBTooltip>
                </div>
                <div class="steps-step-2">
                    <MDBTooltip placement="top" tooltipContent="Personal Goals"><MDBBtn gradient="near-moon" className="btn btn-blue-grey btn-circle-2 waves-effect mr-0" title="Terms and Conditions"><i class="far fa-image" aria-hidden="true" onClick={this.swapFormActive(1)(3)} /></MDBBtn></MDBTooltip>
                </div>
            </div>
        </div>
    )
  }
}
