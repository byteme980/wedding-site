import React, { Component } from 'react';

import Routes from './components/Routes'
import NavBar from './components/NavBar'
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Routes />
        <Footer />
      </div>
    );
  }
}

export default App;
