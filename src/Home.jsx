import React, {Component} from 'react';
import Header from './Header';

import Footer from './Footer';
import Sidebar from './Sidebar';
import Sample from './Sample';




class Home extends Component {
  render() {
    return (
      <div class="main">
        
        <Header />

        <Sidebar />
        <div id="scroll">SCROLL DOWN</div>
        <div class="on">
        <Sample link="/about" linkdata="ABOUT" margin="300px"/>
        </div>
        <div class="on">
        <Sample link="/skills" linkdata="SKILLS" margin="500px"/>
        </div>
        <div class="on">
        <Sample link="/project" linkdata="PROJECTS" margin="700px"/>
        </div>
        <div class="on">
        <Sample link="/experience" linkdata="EXPERIENCE" margin="900px"/>
        </div>
        <div class="on">
        <Sample link="/education" linkdata="EDUCATION" margin="1100px"/>
        </div>
       
      
        
        <Footer />
        
      </div>
    )
  }
}

export default Home
