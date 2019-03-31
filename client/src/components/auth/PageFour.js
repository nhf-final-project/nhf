import React, { Component } from 'react'

export default class PageFour extends Component {
  render() {
    return (
      <div class="row setup-content-2" id="step-4">
            <div class="col-md-12">
                <h3 class="font-weight-bold pl-0 my-4"><strong>Finish</strong></h3>
                <h2 class="text-center font-weight-bold my-4">Registration completed!</h2>
                <button class="btn btn-mdb-color btn-rounded prevBtn-2 float-left" type="button">Previous</button>
                <button class="btn btn-success btn-rounded float-right" type="submit">Submit</button>
            </div>
        </div>
    )
  }
}
