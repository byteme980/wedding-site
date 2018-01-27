import React, { Component } from 'react';
import tappanHill from '../images/TappanHill.jpg';
import './wedding.css';

class Wedding extends Component {
  render() {
    // const API_KEY = 'AIzaSyDIqGjApQvZVIYvb8oCMYjdmYB2D9B0yOk';
    // const googleMapsURL = `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=Tappan+Hill,Tarrytown+NY"`;
    const googleMapsURL = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.85394719157!2d-73.85574228458395!3d41.0721850792944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2eab7ff528e49%3A0x24b6e761fe9b0e49!2sAbigail+Kirsch+at+Tappan+Hill+Mansion!5e0!3m2!1sen!2sus!4v1516857384341`
    return (
      <div className='wedding'>
        <img alt="Tappan Hill Mansion" src={tappanHill} width="100%" height="auto"/>
        <h1 className="photo-caption center">The Wedding</h1>
        <section>
          <h2>Tappan Hill Mansion</h2>
          <p>200 Gundpowder Lane. Tarrytown, NY</p>
          <p>Arrive by 5pm</p>
          <p>Ceremony will begin promptly at 5:30pm</p>
          <p>Cocktail hour and reception to follow</p>
          <p>Formal Attire</p>
        </section>
        <section>
          <iframe
            title="Tappan Hill Map"
            src={googleMapsURL}
            width="600"
            height="450"
            frameborder="0"
            style={{border:0}}
            allowfullscreen
          />

        </section>
      </div>
    );
  }
}

export default Wedding;