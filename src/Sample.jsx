import React, { Component } from 'react'
import {Link } from 'react-router-dom'
import AOS from 'aos';
import "aos/dist/aos.css";


class Sample extends Component {

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
      <div class="samp" data-aos="flip-right" style={{"margin-left":this.props.margin}}>
        
        <Link  class="link" to={this.props.link}>{this.props.linkdata} </Link>
        
      </div>
    )
  }
}

export default Sample
