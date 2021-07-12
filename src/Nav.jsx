import React, { Component } from 'react'

class Nav extends Component {
  render() {
    return (
      <div class="nav">
        <div>{this.props.header}</div>
        
      </div>
    )
  }
}

export default Nav
