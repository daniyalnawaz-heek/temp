import React, { Component } from 'react';

import { FaInstagram} from 'react-icons/fa';
import  {SiGithub} from 'react-icons/si';
import {RiTwitterFill} from 'react-icons/ri';
import {AiFillLinkedin} from 'react-icons/ai';



class Sidebar extends Component {
  render() {
    return (
      <div class="sidebar">
        <div id="photo">
          
        </div>
       
        <div id="links">
          <a class="social" href="https://www.instagram.com/_daniyalnawaz_" ><FaInstagram size="2em" /></a><br/>
          <a class="social" href="https://github.com/daniyalnawaz-heek"><SiGithub size="2em"/></a><br/>
          <a class="social" href="https://twitter.com/_daniyalnawaz_"><RiTwitterFill size="2em" /></a><br/>
          <a class="social" href="https://www.linkedin.com/in/daniyal-nawaz-988a77178/"><AiFillLinkedin size="2em"/></a>
          

          <h4>daniyalnawaz.heek@gmail.com</h4>
          <h4>+91 7860786132</h4>
          <h6>#HEEKFOREMOST</h6>
          
        
          
        </div> 
      </div>
    )
  }
}

export default Sidebar
