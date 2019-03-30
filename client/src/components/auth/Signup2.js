import React from 'react';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView } from 'mdbreact';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';

const CarouselPage = () => {
  return (
    <MDBCarousel thumbnails interval={false} multiItem={false} activeItem={1} length={4} showControls={false} showIndicators={true} className="z-depth-1">
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <FirstPage />
            <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg" alt="First slide" />
          </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(99).jpg" alt="Second slide" />
            <SecondPage />
          </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(17).jpg" alt="Third slide" />
          </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="4">
          <MDBView>
            <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20%28143%29.jpg" alt="Mattonit's item" />
          </MDBView>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
}

export default CarouselPage;