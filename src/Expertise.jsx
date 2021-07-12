import React, { Component } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";

class Expertise extends Component {

  componentDidMount() {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }


  render() {
    return (
      <div class="expert" data-aos="flip-left" style={{'margin-left':this.props.margin}}>
        <div >
          <h5 >{this.props.expert}</h5>
          
        </div>
        
      </div>
    )
  }
}

export default Expertise
