import React, { Component } from 'react';

export default class ContactComponent extends Component {
  getContact = () => {
    return (
      <div style={{ maxWidth: '100%', textAlign: 'center', margin: 20 }}>
        <span
          style = {{
            maxWidth: '65vw',
            fontSize: '.4em',
            textAlign:'center',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: '30pt'
          }}
        >
        Follow us on Instagram {' '}
          <a href="https://www.instagram.com/bsu.nyu/" target="_blank" rel="noopener noreferrer">
            @bsu.nyu
          </a> to stay updated on all things BSU at NYU!
        <br/>
        Feel free to email us at{' '}
          <a href="mailto:bsunyu@gmail.com" target="_blank" rel="noopener noreferrer">
             bsunyu@gmail.com
          </a>!
        </span>
      </div>
    );
  };

  render() {
    return (
      <div id="contact" style= {{width: '100%'}}>
        <div style= {{
          fontSize: '3.5em',
          margin:10,
          marginTop: 0,
          marginBottom: 0
        }}
        >
        <p>
          Want to get in contact with NYU BSU?
        </p>
          {this.getContact()}
        <br/>
      </div>
    </div>
    );
  }
}
