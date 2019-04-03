import React from 'react';
import { MDBMedia, MDBIcon } from 'mdbreact';

const MediaObjectPage = () => {
  return (
    <MDBMedia list className="mt-3">
      <MDBMedia tag="li">
        <MDBMedia left href="#">
          <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/avatar-min1.jpg" alt="Generic placeholder image" />
        </MDBMedia>
        <MDBMedia body>
          <MDBMedia heading>
            Anna Smith
            </MDBMedia>
          <MDBIcon icon="star" className="blue-text" />
          <MDBIcon icon="star" className="blue-text" />
          <MDBIcon icon="star" className="blue-text" />
          <MDBIcon icon="star" className="blue-text" />
          <MDBIcon icon="star" className="grey-text" />
          <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
        </MDBMedia>
      </MDBMedia>
      <MDBMedia tag="li">
        <MDBMedia left href="#">
          <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/avatar-min2.jpg" alt="Generic placeholder image" />
        </MDBMedia>
        <MDBMedia body>
          <MDBMedia heading>
            John Craig
            </MDBMedia>
          <MDBIcon icon="star" className="blue-text" />
          <MDBIcon icon="star" className="blue-text" />
          <MDBIcon icon="star" className="blue-text" />
          <MDBIcon icon="star" className="grey-text" />
          <MDBIcon icon="star" className="grey-text" />
          <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
        </MDBMedia>
      </MDBMedia>
      <MDBMedia tag="li">
        <MDBMedia left href="#">
          <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/avatar-min3.jpg" alt="Generic placeholder image" />
        </MDBMedia>
        <MDBMedia body>
          <MDBMedia heading>
            Natalie Doe
            </MDBMedia>
          <MDBIcon icon="star" className="blue-text" />
          <MDBIcon icon="star" className="blue-text" />
          <MDBIcon icon="star" className="blue-text" />
          <MDBIcon icon="star" className="blue-text" />
          <MDBIcon icon="star" className="grey-text" />
          <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
        </MDBMedia>
      </MDBMedia>
    </MDBMedia>
  );
}

export default MediaObjectPage;