import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Toolbar = props => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div
      style={{ position: 'absolute', right: 0, margin: 10 }}
      id="navbarBasicExample"
      className="navbar-menu fade-in"
    >
      <AnchorLink className="navbar-item" href="#about">
        Our Mission
      </AnchorLink>

      <AnchorLink className="navbar-item" href="#upcoming">
        Upcoming Events
      </AnchorLink>

      <AnchorLink className="navbar-item" href="#exec">
        Executive Board
      </AnchorLink>

      <AnchorLink className="navbar-item" href="#archives">
        Archives
      </AnchorLink>

      <AnchorLink className="navbar-item" href="#contact">
        Contact
      </AnchorLink>
    </div>
  </nav>
);

export default Toolbar;
