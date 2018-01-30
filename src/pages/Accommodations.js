import React, { Component } from 'react';
import courtyard from '../images/CourtyardMarriott.jpg';
import wishlist from '../images/wishList.jpg';

class Accommodations extends Component {
  render() {
    return (
      <div className="container">
        <h1>Accommodations</h1>
        <h2>Getting there</h2>
        <p>
          If you're coming from out of town, we recommend flying into John F. Kennedy International Airport (JFK).
          Laguardia (LGA) and Newark (NWK) are also nearby. We recommend flying in on Friday and leaving sometime on Sunday to get the most out of your visit!
        </p>
        <h2>Hotels</h2>
        <p>
          There are a surprising number of hotels where you can rest your head.
          There's the Marriott, Doubletree Hilton, etc. We'll keep this area updated once we've set up a hotel block.
        </p>
        <div className="image-container" style={{backgroundImage: `url(${courtyard})`}} />
        <h2>Airbnbs</h2>
        <p>
          If hotels are not your thing, there are also plenty of unique Airbnbs in the area.
          Check out our <a
            rel="noopener noreferrer"
            href="https://www.airbnb.com/wishlists/265550236/join?invite_code=RKGAHELI&inviter_id=11287574"
            target="_blank"
          >
            wishlist
          </a> of places to stay near the wedding.
        </p>
        <div className="image-container" style={{backgroundImage: `url(${wishlist})`}} />
      </div>
    );
  }
}

export default Accommodations;
