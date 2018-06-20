import React, { Component } from 'react';
import sheraton from '../images/sheraton.jpg';
import wishlist from '../images/wishList.jpg';
import withScrollToTop from '../components/withScrollToTop';

class Accommodations extends Component {
  render() {
    return (
      <section className="container">
        <h1>Accommodations</h1>
        <h2>Getting there</h2>
        <p>
          If you're coming from out of town, we recommend flying into John F. Kennedy International Airport (JFK), but Laguardia (LGA), Newark (NWK), and Westchester County Airport (HPN) are also nearby. We recommend flying in on Friday and leaving sometime on Sunday to get the most out of your visit!
        </p>
        <section>
          <h2>Hotels</h2>
          <p>
            We've reserved a block of rooms at the Sheraton Hotel.
          </p>
          <div className="image-container" style={{backgroundImage: `url(${sheraton})`}} />
          <a href="tel:18886278523">1-888-627-8523</a>
          <br />
          <a href="https://www.google.com/maps/place/Sheraton+Tarrytown+Hotel/@41.0612733,-73.8395311,17z/data=!3m1!4b1!4m7!3m6!1s0x89c29532bc2f4885:0x7073cc8e66e28354!5m1!1s2018-07-08!8m2!3d41.0612733!4d-73.8373424">
          600 White Plains Road<br/>Tarrytown, NY, 10591
          </a>
          <p>Please book using the link below or call them and mention the Strauch/Larie wedding to receive a discounted rate.</p>
          {/*TODO: get booking link for hotel block */}
          <a href="" className="link-btn">Book</a>
        </section>
        <section>
          <h2>Airbnbs</h2>
          <p>
            If hotels are not your thing, there are also plenty of unique Airbnbs in the area.
            You can search for one on our <a href="https://www.airbnb.com/events/Kim-and-Phil's-Wedding">Airbnb Event Page</a> or our <a href="https://www.airbnb.com/wishlists/265550236">wishlist</a> of homes in the area.
          </p>
          <div className="image-container" style={{backgroundImage: `url(${wishlist})`}} />
        </section>
      </section>
    );
  }
}

export default withScrollToTop(Accommodations);
