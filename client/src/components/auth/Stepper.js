import React, { Component } from 'react'

export default class Stepper extends Component {
  render() {
    return (
        <div class="steps-form-2">
            <div class="steps-row-2 setup-panel-2 d-flex justify-content-between">
                <div class="steps-step-2">
                    <a href="#step-1" type="button" class="btn btn-amber btn-circle-2 waves-effect ml-0" data-toggle="tooltip" data-placement="top" title="Basic Information"><i class="far fa-folder-open" aria-hidden="true"></i></a>
                </div>
                <div class="steps-step-2">
                    <a href="#step-2" type="button" class="btn btn-blue-grey btn-circle-2 waves-effect" data-toggle="tooltip" data-placement="top" title="Personal Data"><i class="fas fa-pencil-alt" aria-hidden="true"></i></a>
                </div>
                <div class="steps-step-2">
                    <a href="#step-3" type="button" class="btn btn-blue-grey btn-circle-2 waves-effect" data-toggle="tooltip" data-placement="top" title="Terms and Conditions"><i class="far fa-image" aria-hidden="true"></i></a>
                </div>
                <div class="steps-step-2">
                    <a href="#step-4" type="button" class="btn btn-blue-grey btn-circle-2 waves-effect mr-0" data-toggle="tooltip" data-placement="top" title="Finish"><i class="fa fa-check" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
    )
  }
}
