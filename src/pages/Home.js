import React, { Component } from 'react';

import Helmet from 'react-helmet';

import Gallery from '../components/Gallery';
import kimAndPhil from '../images/kimAndPhil.jpg';
import mountDiablo from '../images/gallery/mountDiablo.jpg';
import mexico from '../images/gallery/mexico.jpg';
import trilium from '../images/gallery/trilium.jpg';
import solarEclipse from '../images/gallery/solarEclipse.jpg';
import ring from '../images/gallery/ring.jpg';
import skiing from '../images/gallery/skiing.jpg';
import goldenGate from '../images/gallery/goldenGate.jpg';
import loversLane from '../images/gallery/loversLane.jpg';
import mtHood from '../images/gallery/mtHood.jpg';
import palace from '../images/gallery/palace.jpg';
import walkingInTheWoods from '../images/gallery/walkingInTheWoods.jpg';
import withScrollToTop from '../components/withScrollToTop';

class Home extends Component {
  render() {
    const galleryImages = [
      palace,
      mountDiablo,
      ring,
      goldenGate,
      mtHood,
      loversLane,
      walkingInTheWoods,
      trilium,
      mexico,
      solarEclipse,
      skiing,
    ]
    return (
      <div className="container">
        <Helmet>
          <title>Kim and Phil - 9/22/2018</title>
        </Helmet>
        <div>
          <h1 className="main-heading">Kim & Phil</h1>
          <div className="main-subheading">September 22, 2018</div>
          <div className="image-container" style={{backgroundImage: `url(${kimAndPhil})`}} />
        </div>
        <section>
          <h2>Our Story</h2>
          <p>
            We met as juniors at Dartmouth College in the fall of 2013 and have been together ever since.
            Today, we live in San Francisco and both work as software engineers.
            In August of last year, we embarked on a summer road trip to see the total solar eclipse in Madras, Oregon.
            When the sun, moon and Earth were aligned, Phil proposed. Before he could even finish asking, Kim said yes! We're ready to officially tie the knot and hope you will be able to join us!
            We'll be getting married in Tarrytown, NY, on the 22nd of September, 2018.
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

export default withScrollToTop(Home);
