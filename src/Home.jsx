import React, {useEffect} from 'react';
import Header from './Header';

import Footer from './Footer';
import Sidebar from './Sidebar';
import Sample from './Sample';
import Presenter from './Presenter'
import Zoom from 'react-reveal/Zoom';




function Home(){


  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  
  
    return (
      <div class="main">
       
        <Header />
        
       

        
        
        <Zoom right>
          <div className="scroll-btn">
          SCROLL DOWN
          </div>
        </Zoom>
    
        <Presenter />
        <Sidebar />
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


export default Home
