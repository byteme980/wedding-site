import React, { Component } from 'react';
import kimAndPhil from '../images/kimAndPhil.jpg'

class Home extends Component {
  render() {
    return (
      <div>
        <main>
          <div>
            <img style={{height: 'auto'}} width="100%" alt="Kim and Phil in SF" src={kimAndPhil}/>
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
            <h2>Photo Gallery</h2>
          </section>
        </main>
      </div>
    );
  }
}

export default Home;
