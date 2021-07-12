import React ,{Component} from 'react';
import {Route,Switch,Link} from 'react-router-dom'
import Education from './Education';
import Home from './Home';
import About from './About';
import Sample from './Sample'

import Work, { Project } from './Project'
import Skill from './Skill';
import Skills from './Skills';
import Experience from './Experience';




class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/project" component={Project}></Route>
          <Route  exact path="/about" component={About}></Route>
          <Route exact path="/education" component={Education}></Route>
          <Route exact path="/skills" component={Skills}></Route>
          <Route exact path="/experience" component={Experience}></Route>
        </Switch>
        
        
      </div>




    )
  }
}

export default App;