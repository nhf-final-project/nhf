import React, { Component } from 'react'

export default class Intro extends Component {
  render() {
    return (
    <div className="view intro" >
      <div className="mask rgba-indigo-strong d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row pt-lg-5 mt-lg-5">
            <div className="col-md-6 mb-5 mt-md-0 mt-5 white-text text-center text-md-left wow fadeInLeft" data-wow-delay="0.3s">
              <h1 className="display-4 font-weight-bold">Lorem ipsum</h1>
              <hr className="hr-light"/>
              <h6 className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi fuga
              nesciunt dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea
              dolor molestiae, quisquam iste.</h6>
              <a className="btn btn-outline-white">Learn more</a>
            </div>
            <div className="col-md-6 col-xl-5 mb-4">
              <div className="card wow fadeInRight" data-wow-delay="0.3s">
                <div className="card-body z-depth-2">
                  <div className="text-center">
                    <h3 className="dark-grey-text">
                      <strong>Write to us:</strong>
                    </h3>
                    <hr/>
                  </div>
                  <div className="md-form">
                    <i className="fas fa-user prefix grey-text"></i>
                    <input type="text" id="form3" className="form-control"/>
                    <label for="form3">Your name</label>
                  </div>
                  <div className="md-form">
                    <i className="fas fa-envelope prefix grey-text"></i>
                    <input type="text" id="form2" className="form-control"/>
                    <label for="form2">Your email</label>
                  </div>
                  <div className="md-form">
                    <i className="fas fa-pencil-alt prefix grey-text"></i>
                    <textarea type="text" id="form8" className="md-textarea form-control" rows="3"></textarea>
                    <label for="form8">Your message</label>
                  </div>
                  <div className="text-center mt-3">
                    <button className="btn btn-indigo">Send</button>
                    <hr/>
                    <fieldset className="form-check">
                      <input className="form-check-input" type="checkbox" id="checkbox1"/>
                      <label className="form-check-label" for="checkbox1" className="dark-grey-text">Subscribe me to the newsletter</label>
                    </fieldset>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        
    )
  }
}
