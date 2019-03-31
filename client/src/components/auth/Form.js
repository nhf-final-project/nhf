import React from "react";
import Stepper from "./Stepper"
import PageOne from "./PageOne"
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import PageFour from "./PageFour";

class StepperExample extends React.Component {

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

handleNextPrevClick = (a) => (param) => (e) => {
  this.setState({
    ['formActivePanel' + a]: param,
    ['formActivePanel' + a + 'Changed']: true
  });
}

handleSubmission = () => {
  alert('Form submitted!');
}

calculateAutofocus = (a) => {
  if (this.state['formActivePanel' + a + 'Changed']) {
    return true
  }
}

render() {
  return (
      <section id="registration">
          <h2 class="section-heading">Registration form with steps</h2>
          <section>
              <div class="row">
                  <div class="col-md-12">
                      <h2 class="text-center font-weight-bold pt-4 pb-5 mb-5"><strong>Registration form</strong></h2>
                      <Stepper />
                      <form role="form" action="" method="post">
                        <PageOne />
                        <PageTwo />
                        <PageThree />
                        <PageFour />
                      </form>

      </div>

    </div>

  </section>



</section>
    );
  };
}

export default StepperExample;