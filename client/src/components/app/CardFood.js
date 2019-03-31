import React, { Component } from 'react'

export default class CardFood extends Component {
  render() {
    return (
      <div className="container">
            <div className="row mb-5">

                <div className="col-lg-3 col-md-6 mb-4">

                    <div className="card collection-card z-depth-1-half">
                        <div className="view zoom">
                            <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/5.jpg" className="img-fluid"
                                alt=""/>
                            <div className="stripe dark">
                                <a>
                                    <p>Red trousers
                                        <i className="fa fa-angle-right"></i>
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="col-lg-3 col-md-6 mb-4">

                    <div className="card collection-card z-depth-1-half">
                        <div className="view zoom">
                            <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/8.jpg" className="img-fluid"
                                alt=""/>
                            <div className="stripe light">
                                <a>
                                    <p>Sweatshirt
                                        <i className="fa fa-angle-right"></i>
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="col-lg-3 col-md-6 mb-4">

                    <div className="card collection-card z-depth-1-half">
                        <div className="view zoom">
                            <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/9.jpg" className="img-fluid"
                                alt=""/>
                            <div className="stripe dark">
                                <a>
                                    <p>Accessories
                                        <i className="fa fa-angle-right"></i>
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="col-lg-3 col-md-6 mb-4">

                    <div className="card collection-card z-depth-1-half">
                        <div className="view zoom">
                            <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/7.jpg" className="img-fluid"
                                alt=""/>
                            <div className="stripe light">
                                <a>
                                    <p>Sweatshirt
                                        <i className="fa fa-angle-right"></i>
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

      </div>

    )
  }
}
