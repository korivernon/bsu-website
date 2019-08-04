import React, { Component } from 'react';

export default class UEComponent extends Component {
  getUpcoming = () => {
    return (
      <div>
        <div>
          <iframe
            style = {{
              marginTop:10,
              marginBottom: 10
            }}
            src="https://calendar.google.com/calendar/b/1/embed?height=75&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=YnN1bnl1QGdtYWlsLmNvbQ&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23E67C73&amp;color=%2333B679&amp;color=%234285F4&amp;title=Black%20Student%20Union%20At%20New%20York%20University"
            width="60%"
            height="75%"
            scrolling="yes">
          </iframe>
        </div>
        <br />
      </div>
    );
  };

  render() {
    return (
      <div id="upcoming" style= {{width: '100%'}}>
        <div style= {{
          fontSize: '4em',
          margin:30,
          marginTop: 10,
          marginBottom: 10
        }}
        >
          <b>Upcoming Events</b>
          <p style={{ fontSize: '.5em'}}>
            <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            >
             Subscribe to our Google Calendar!
            </a>
          </p>
        </div>
          {this.getUpcoming()}
        <br/>
      </div>
    );
  }
}
