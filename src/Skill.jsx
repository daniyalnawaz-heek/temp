import React, { Component } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import {FaReact} from 'react-icons/fa';
import {FaNodeJs} from 'react-icons/fa'
import {SiMongodb} from 'react-icons/si'
import {SiMysql} from 'react-icons/si'
import {SiJavascript}  from 'react-icons/si'
import {FaPython} from 'react-icons/fa'
import {SiCss3} from 'react-icons/si'
import {SiHtml5} from 'react-icons/si'
import {SiRedux} from 'react-icons/si'



class Skill extends Component {

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
      <div class="skill" data-aos="zoom-in-up" style={{"margin-left":this.props.margin}}>
        <div>
          <FaReact />
          <SiRedux />
          <SiMongodb />
          <FaNodeJs />
          <FaPython />
          <SiJavascript />
          <SiMysql />
          <SiHtml5 /> 
          <SiCss3 />
          <h5 class="cskill">{this.props.skill}</h5>
          <h5 class="sabout">{this.props.about}</h5>
        </div>
        
      </div>
    )
  }
}

export default Skill
