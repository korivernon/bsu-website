import React, { Component } from 'react';

export default class AboutComponent extends Component {
  getAbout = () => {
    return (
      <div style={{ maxWidth: '100%', textAlign: 'center', margin: 20 }}>
        <span = {{
          maxWidth: '65vw',
          fontSize: '1.2em',
          textAlign:'left',
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          lineHeight: '24pt'
        }}
      >
        The Black Student Union at New York University provides an opportunity
        for students whose mission or identity are linked to the experiences of
        the African Diaspora to pull together to discuss co-sponsoring events,
        collaborative efforts, networking and solidarity building initiatives
        with their peers. Club meeting and events are open to all New York
        University students. <br />
        <br />
        As Black Students of New York University, we represent a culture that is
        always underrepresented in top tier colleges. We encourage freshman and
        upperclassmen to be involved at NYU where we are making our mark in
        history. We are the scholars who decided to take on the difficulty of
        being a college student in New York City while maintaining academic
        excellence and uplifting the community. All of us come from different
        backgrounds. But at the end of the day, we share a rich and common
        culture. No matter where we come from, we cannot deny the fact that we
        are BLACK! So let’s be proud of our accomplishments. Let’s embrace being
        here, and let’s make the most of our time together.

        </span>
      </div>
    );
  };
  
  render() {
    return (
      <div id="about" style= {{width: '100%'}}>
        <div style= {{
          fontSize: '4em',
          margin:30,
          marginTop: 0,
          marginBottom: 0
        }}
        >
          <b>About NYU Black Student Union</b>
        </div>
          {this.getAbout()}
        <br/>
      </div>
    );
  }
}
