import React, { Component } from 'react';
import Footer from './Footer';
import Workleft from './Workleft';
import Workright from './Workright'
import Nav from './Nav'

export class Project extends Component {
  render() {
    return (
      <div class="show2">
        <Nav header="PROJECTS"/>

        <Workleft  link="https://github.com/daniyalnawaz-heek/whatsapp_bot" detail="" title="WHATSAPP AUTOMATION" />
        
        <Workright link="https://github.com/daniyalnawaz-heek/sms_bomber-flipkart-" detail="" title="SPAM BOT"  />
        <Workleft  link="https://github.com/daniyalnawaz-heek/automation_tweet" detail="" title="TWEET AUTOMATION" />
        <Workright link="https://github.com/daniyalnawaz-heek/virtual_keyboard" detail="" title="VIRTUAL KEYBOARD"  />
        <Workleft  link="https://github.com/daniyalnawaz-heek/Spam-bot" detail="" title="SMS FLOODING" />
        <Workright link="https://github.com/daniyalnawaz-heek/music_player" detail="" title="AUDIO PLAYER"  />
        <Workleft  link="https://github.com/daniyalnawaz-heek/password-generator" detail="" title="PASSWORD GENERATOR" />

        <Workright link="https://github.com/daniyalnawaz-heek/heekweather" detail="" title="WEATHER WEBSITE"  />

        <Workleft  link="https://github.com/daniyalnawaz-heek/Password-validator" detail="" title="PASSOWRD VALIDATOR" />
        <Workright link="https://github.com/daniyalnawaz-heek/Email-sender" detail="" title=" EMAIL AUTOMATION"  />
        <Workleft  link="https://github.com/daniyalnawaz-heek/url-shortner" detail="" title="URL SHORTNER" />
        <Workright link="https://github.com/daniyalnawaz-heek/QR-code-generator" detail="" title="QR CODE GENERATOR"  />
        <Workleft link="https://github.com/daniyalnawaz-heek/tip_calculator" detail="cbhbahbwhb" title="TIP CALCULATOR" />
        <Workright  link="https://github.com/daniyalnawaz-heek/Jira-clone" detail="" title="JIRA CLONE"   />
      
        <Workleft link="https://github.com/daniyalnawaz-heek/pdf_to_text" detail="" title="PDF TO SPEECH"    />
        <Workright link="https://github.com/daniyalnawaz-heek/text_to_speech" detail="" title="TEXT TO SPEECH"     />
        <Workleft  link="https://github.com/daniyalnawaz-heek/speech_to_text" detail="" title="SPEECH TO TEXT"   />
        <Workright link="https://github.com/daniyalnawaz-heek/heeknews" detail="" title="NEWS WEB APP"    />
      


   
        <Footer />
        
      </div>
    )
  }
}

export default Project
