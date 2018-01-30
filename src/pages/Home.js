import React, { Component } from 'react';
import Gallery from '../components/Gallery';
import mountDiablo from '../images/gallery/mountDiablo.jpg';
import mexico from '../images/gallery/mexico.jpg';
import trilium from '../images/gallery/trilium.jpg';
import solarEclipse from '../images/gallery/solarEclipse.jpg';
import kayak from '../images/gallery/kayak.jpg';
import saveTheDate from '../images/saveTheDate.jpg';
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
        <div className="image-container" style={{backgroundImage: `url(${saveTheDate})`}} />
        <section>
          <h2>Our Story</h2>
          <p>
            We met as juniors at Dartmouth College in the fall of 2013 and have been together ever since.
            Today, we live in San Francisco and work as software engineers.
            In August of last year, we embarked on a summer road trip to see the total solar eclipse in Madras, Oregon.
            When the sun, moon and Earth were aligned, Phil proposed. Before he could finish asking, Kim said yes! We're ready to officially tie the knot and hope you will be able to join us!
            We'll be getting married in Tarrytown, NY, on the 22nd of September in 2018.
          </p>
        </section>
        <section>
          <h2>Photos</h2>
          <Gallery images={galleryImages} />
          {/*<PhotoRow imageOne={ring} imageTwo={solarEclipse} />
          <PhotoRow imageOne={mountDiablo} imageTwo={kayak} />
          <PhotoRow imageOne={trilium} imageTwo={mexico} />
          <PhotoRow imageOne={portlandDinner} imageTwo={skiing} />*/}
        </section>
      </div>
    );
  }
}

export default Home;
