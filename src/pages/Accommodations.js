import React, { Component } from 'react';
import Courtyard from '../images/CourtyardMarriott.jpg';
import CastleHotel from '../images/CastleHotel.jpg';
import DoubleTreeHilton from '../images/DoubleTreeHilton.jpg';

class Accommodations extends Component {
  render() {
    return (
      <div>
        <section>
          <h1>Accommodations</h1>
          <img alt="Courtyard Marriott" src={Courtyard} />
          <img alt="Castle Hotel and Spa" src={CastleHotel} />
          <img alt="Double Tree Hilton" src={DoubleTreeHilton} />
          <h2>Hotels</h2>
          <p>
            There are a surprising number of hotels where you can rest your head.
            We have a hotel block at the Marriott so you can bok there for a discounted rate :).
          </p>
          <h2>Airbnbs</h2>
          <p>
            If hotels are not your thing, there are also plenty of unique *shameless plug* Airbnbs in the area.
          </p>
        </section>
      </div>
    );
  }
}

export default Accommodations;
