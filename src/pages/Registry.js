import React, { Component } from 'react';
import Helmet from 'react-helmet';

import amazon from '../images/amazon.png';
import withScrollToTop from '../components/withScrollToTop';
import zola from '../images/zola.jpg';

class Registry extends Component {
  render() {
    return (
      <div className="container registry">
        <Helmet>
          <title>Kim and Phil - Registry</title>
        </Helmet>
        <h1>Registry</h1>
        <p>Your presence is plenty, but if you would like to get us presents...</p>
        <section className="registry-section">
          <div className="registry-image" style={{ backgroundImage: `url(${amazon})`}} />
          <div>
            <h2>Amazon</h2>
            <a href="https://www.amazon.com/wedding/share/kimandphil" className="link-btn">Shop our Registry</a>
          </div>
        </section>
        <section className="registry-section">
          <div className="registry-image" style={{backgroundImage: `url(${zola})`}} />
          <div>
            <h2>Zola</h2>
            <a href="https://www.zola.com/registry/kimandphil922" className="link-btn">Shop our Registry</a>
          </div>
        </section>
      </div>
    );
  }
}

export default withScrollToTop(Registry);
