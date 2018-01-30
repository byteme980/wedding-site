import React, { Component } from 'react';
import sandy from '../images/gallery/sandy.jpg'

class Registry extends Component {
  render() {
    console.log(sandy)
    return (
      <div className="container">
        <h1>We are working on it!</h1>
        {'<3'}
        <div className="image-container" style={{backgroundImage: `url(${sandy})`}} />
      </div>
    );
  }
}

export default Registry;
