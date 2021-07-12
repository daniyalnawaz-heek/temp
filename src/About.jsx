import React, { Component } from 'react';
import Footer from './Footer';
import Nav from './Nav'

class About extends Component {
  render() {
    return (
      <div class="show1">
        <Nav header="ABOUT"/>
        <div class="intro">
        Hi, I'm Daniyal Nawaz, a Computer Science undergrad student who has a inclination towards field of software development. I’m always lurking for an role where I can utilize my experience with natural language processing and building web apps for non-technical users to further the mission of Coursera in democratizing education across the world

,a software developer role where I can learn and contribute to a more established team and resonate with my work ethic and eagerness to learn and enhance professional skill.
        
        </div>
        <div class="email">
        </div>
      
        <div class="intro">
        Expertized in web development with a Bachelor of Technology major in Computer Science from Noida Institute of Engineering & Technology. Accumulated a strong foundational knowledge in this domain. Have a huge upside potential and absolutely negligible downside inefficiency in my performance ethic.
       

        </div>
        <Footer />
        
      </div>
    )
  }
}

export default About
