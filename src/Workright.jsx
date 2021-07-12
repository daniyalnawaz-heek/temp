import React, { Component } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";

class   Workright extends Component {

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
      <div>
        <div class="workright" data-aos="fade-right">
          <h1>{this.props.title}</h1>
          <p>
            {this.props.detail}
          </p>
          <a class="work-icon" href={this.props.link}>VIEW</a>
        </div>
        
      </div>
    )
  }
}

export default Workright
