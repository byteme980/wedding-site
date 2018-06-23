import React, { Component } from 'react';
import Helmet from 'react-helmet';

import tappanHill from '../images/TappanHill.jpg';
import withScrollToTop from '../components/withScrollToTop';

class Wedding extends Component {
  render() {
    const googleMapsURL = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.85394719157!2d-73.85574228458395!3d41.0721850792944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2eab7ff528e49%3A0x24b6e761fe9b0e49!2sAbigail+Kirsch+at+Tappan+Hill+Mansion!5e0!3m2!1sen!2sus!4v1516857384341`
    return (
      <div className="container">
        <Helmet>
          <title>Kim and Phil - Wedding</title>
        </Helmet>
        <h1>The Wedding</h1>
        <div className="image-container" style={{backgroundImage: `url(${tappanHill})`}} />
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
            width="100%"
            height="400px"
            frameBorder="0"
            style={{border:0}}
            allowFullScreen
          />

        </section>
      </div>
    );
  }
}

export default withScrollToTop(Wedding);
