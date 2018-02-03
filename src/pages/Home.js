import React, { Component } from 'react';
import Gallery from '../components/Gallery';
import kimAndPhil from '../images/kimAndPhil.jpg';
import mountDiablo from '../images/gallery/mountDiablo.jpg';
import mexico from '../images/gallery/mexico.jpg';
import trilium from '../images/gallery/trilium.jpg';
import solarEclipse from '../images/gallery/solarEclipse.jpg';
import kayak from '../images/gallery/kayak.jpg';
import saveTheDate from '../images/saveTheDate.png';
import ring from '../images/gallery/ring.jpg';
import skiing from '../images/gallery/skiing.jpg';
import portlandDinner from '../images/gallery/portlandDinner.jpg';

class Home extends Component {
  render() {
    const galleryImages = [
      ring,
      solarEclipse,
      mountDiablo,
      kayak,
      trilium,
      mexico,
      portlandDinner,
      skiing,
    ]
    return (
      <div className="container">
        <div>
          <h1>Kim & Phil — 9.22.2018</h1>
          <img height="auto" width="100%" alt="Kim and Phil in SF" src={kimAndPhil}/>
        </div>
        <section>
          <h2>Our Story</h2>
          <p>
            We met at Dartmouth College in the fall of 2013. It started with an email, and the rest is history...
            Fast forward 4ish years, and we're in San Francisco working as software engineers.
            In August 2017, we took a road trip to see the total solar eclipse in Madras, Oregon.
            When the sun had entered what is known as the "diamond ring effect," Phil proposed!
            Before he could finish asking, Kim said yes! We're ready to officially tie the knot and hope you will be able to join us!
            We'll be getting married in Tarrytown, NY.
          </p>
        </section>
        <section>
          <h2>Photos</h2>
          <Gallery images={galleryImages} />
        </section>
      </div>
    );
  }
}

export default Home;
