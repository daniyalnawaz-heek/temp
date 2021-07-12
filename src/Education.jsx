import React, { Component } from 'react';
import Footer from './Footer';
import Expertise from './Expertise';
import Nav from './Nav'

class Education extends Component {
  render() {
    return (
      <div class="edu">
        <Nav header="EDUCATION"/>
       
        <div class="edu-mid">HIGH SCHOOL</div>

        <Expertise margin="300px" expert="COMPLETED MY HIGH SCHOOL FROM ONE OF THE PRESTIGIOUS SCHOOL IN KANPUR, SETH ANANDRAM JAIPURIA SCHOOL"/>
        <Expertise margin="700px" expert="PERCENTAGE: 89%"/>

        <div class="edu-mid">SECONDARY SCHOOL</div>

        <Expertise margin="700px" expert="COMPLETED MY SECONDRY SCHOOL FROM ONE OF THE PRESTIGIOUS SCHOOL IN KANPUR, SETH ANANDRAM JAIPURIA SCHOOL"/>
        <Expertise margin="300px" expert="PERCENTAGE: 84%"/>

        <div class="edu-mid">B.TECH</div>

        <Expertise margin="300px" expert="
        PURSUING MY UNDERGRADUATE IN COMPUTER SCIENCE FROM NOIDA INSTITUTE OF ENGINEERING AND TECHNOLOGY"/>
        <Expertise margin="700px" expert="AGGREGATE: 8 CGPA"/>

        <div class="edu-mid">VOLUNTEER</div>
        <Expertise margin="700px" expert="CHIEF SECRETARY AT COMFEST HELD AT SETH ANANDRAM JAIPURIA SCHOOL, KANPUR"/>
        <Expertise margin="300px" expert="COMFEST IS THE LARGEST STUDENT ORGANISED ANNUAL TECHNO-CULTURAL EVENT ORGANISED BY JAIPURIA COMPUTER CLUB​."/>
       
        <Footer />
        
        
      </div>
    )
  }
}

export default Education
