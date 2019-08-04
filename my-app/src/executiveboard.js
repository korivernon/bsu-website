import React from 'react';
import logo from './logo.svg';
import './App.css';
import AboutComponent from './About.js'
import ExecComponent from './ExecBoard.js'
import 'bulma/css/bulma.css'
import 'fontawesome'
import Toolbar from './Toolbar.js'

function Eboard() {
  return (
    <div style={{marginTop: '20px'}} className="Eboard">
      <header>
        <Toolbar />
      </header>
      <main>
        <body>
          <p>
            <ExecComponent />
          </p>
        </body>
    </main>
  </div>
  );
}

export default Eboard;
