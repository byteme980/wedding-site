import React from 'react';

import { NavLink } from 'react-router-dom';

// import './navbar.css';

const NavBar = (props) => (
  <nav>
    <ul>
      <li><NavLink exact to="/">KIM & PHIL</NavLink></li>
      <li><NavLink to="/wedding">Wedding</NavLink></li>
      <li><NavLink to="/accommodations">Accommodations</NavLink></li>
      <li><NavLink to="/registry">Registry</NavLink></li>
      <li><NavLink to="/rsvp">RSVP</NavLink></li>
    </ul>
  </nav>
);

export default NavBar;
