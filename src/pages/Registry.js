import React, { Component } from 'react';
import sandy from '../images/gallery/sandy.jpg'
class Registry extends Component {
  render() {
    return (
      <div className="container">
        <div style={{height: '88vh'}}>
        <h1>We're working on it!</h1>
        {'<3,'}
        <img alt="kim and phil" src={sandy} width="100%" height="auto" />
        </div>
      </div>
    );
  }
}

export default Registry;
