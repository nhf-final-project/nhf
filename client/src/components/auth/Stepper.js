import React, { Component } from 'react'

export default class Stepper extends Component {
  render() {
    return (
        <div className="steps-form-2">
            <div className="steps-row-2 setup-panel-2 d-flex justify-content-between">
                <div className="steps-step-2">
                    <a href="#step-1" type="button" className="btn btn-amber btn-circle-2 waves-effect ml-0" data-toggle="tooltip" data-placement="top" title="Basic Information"><i className="far fa-folder-open" aria-hidden="true"></i></a>
                </div>
                <div className="steps-step-2">
                    <a href="#step-2" type="button" className="btn btn-blue-grey btn-circle-2 waves-effect" data-toggle="tooltip" data-placement="top" title="Personal Data"><i className="fas fa-pencil-alt" aria-hidden="true"></i></a>
                </div>
                <div className="steps-step-2">
                    <a href="#step-3" type="button" className="btn btn-blue-grey btn-circle-2 waves-effect" data-toggle="tooltip" data-placement="top" title="Terms and Conditions"><i className="far fa-image" aria-hidden="true"></i></a>
                </div>
                <div className="steps-step-2">
                    <a href="#step-4" type="button" className="btn btn-blue-grey btn-circle-2 waves-effect mr-0" data-toggle="tooltip" data-placement="top" title="Finish"><i className="fa fa-check" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
    )
  }
}
