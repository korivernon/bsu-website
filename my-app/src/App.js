import React from 'react';
import logo from './logo.svg';
import './App.css';
import AboutComponent from './About.js';
import ExecComponent from './ExecBoard.js';
import 'bulma/css/bulma.css';
import 'fontawesome';
import NavComponent from './Toolbar.js';
import UEComponent from './UpcomingEvents.js';
import ContactComponent from './contact.js'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Popup from "reactjs-popup";

function App() {
  return (
    <div className="App">
      <header>
        < NavComponent/>
      </header>
      <main>
        <body>
          <p>
          <AnchorLink
            href="#about"
            style={{ position: 'relative', bottom: 0 }}>
            <i className="icon fa fa-chevron-down" aria-hidden="true" />
          </AnchorLink>
            <AboutComponent />

          <AnchorLink
            href="#upcoming"
            style={{ position: 'relative', bottom: 0 }}>
            <i className="icon fa fa-chevron-down" aria-hidden="true" />
          </AnchorLink>
            <hr className="divider" />
              <UEComponent />

          <AnchorLink
            href="#exec"
            style={{ position: 'relative', bottom: 0 }}>
            <i className="icon fa fa-chevron-down" aria-hidden="true" />
          </AnchorLink>
            <hr className="divider" />
              <ExecComponent />
          <AnchorLink
            href="#contact"
            style={{ position: 'relative', bottom: 0 }}>
            <i className="icon fa fa-chevron-down" aria-hidden="true" />
          </AnchorLink>
            <hr className="divider" />
            <ContactComponent />

          </p>
        </body>
    </main>
  </div>
  );
}

export default App;
