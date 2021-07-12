import React from 'react';
import Expertise from './Expertise';
import Nav from './Nav';
import Footer from './Footer';
import {AiOutlineHome} from 'react-icons/ai'


function Experience() {
  return (
      <div class="exp">
         <Nav header="EXPERIENCE"/>
         <div class="edu-mid">SOCIAL MEDIA MARKETING (APNE LOG)</div>
         <Expertise margin="200px" expert="
• Developed and scheduled weekly social media content."/>
       
         <Expertise margin="600px" expert="• Posted on relevant blogs, and seeding content into social applications as needed."/>
         <Expertise margin="1000px" expert="• Provided regular reports showcasing overall growth of channels."/>
        
         <div class="edu-mid">BUSINESS ANALYST  (WIRED CLAN)</div>
         <Expertise margin="200px" expert="• Collected quantitative and qualitative data from marketing campaigns."/>
         <Expertise margin="600px" expert="• Supported the marketing team in daily administrative tasks."/>
         <Expertise margin="1000px" expert=" Assisted in marketing and advertising promotional activities (e.g. social
media, direct mail, and web)."/>•
         

         <div class="edu-mid">WEB DEVELOPMENT (PEPCODING)</div>
         <Expertise margin="200px" expert="• Gather and refine specifications and requirements based on technical needs."/>
         <Expertise margin="600px" expert="• Create interactive layout/user interface by using standard HTML/CSS practices."/>

         <div class="butt" >
         <AiOutlineHome />
         </div>
       


         <Footer />
      </div>
     
  )
}

export default Experience
