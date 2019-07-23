import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
let execs = require('./execboard.json');

execs.sort((a,b)) {
  return a.priority - b.priority;
});

export default class ProjectComponent extends Component {
  getExecs = () => {
    return (
      <Grid
      container
      spacing = {24}
      direction = "row"
      justify = "center">
      {execs.map(project => {
        if (exec.hidden) {
          return null;
        }
        return (
          <Grid item key = {project.name}>
          {this.makeCard(project)}
          </Grid>
        );
      })}
      </Grid>
    );
  };
};

makeCard = project => {
  if (project.hidden) {
    return null;
  }
  return (
    <div
      className="card"
      style={{ margin: 10, minWidth: '40vw', maxWidth: '75vw' }}
    >
      <header className="card-header">
        <p className="card-header-title" style={{ fontSize: '1.5em' }}>
          {project.name}
        </p>
      </header>
      <div className="card-content" style={{}}>
        <div
          className="content"
          style={{ textAlign: 'center', lineHeight: '24pt' }}
        >
          {project.image && (
            <div>
              <img
                src={project.image}
                alt={project.name}
                style={{
                  maxHeight: '20em',
                  maxWidth: '40vw',
                  marginLeft: 'auto',
                  marginRight: 'auto'
                }}
              />
              <br />
            </div>
          )}
          <i>{project.summary}</i>
          <br />
          <br />
          <div style={{ textAlign: 'left' }}>
            {project.major}
            {project.highlight && (
              <div>
                <br />
                <b>{project.highlight}</b>
              </div>
            )}
          </div>
        </div>
      </div>
      <footer className="card-footer">
        {project.igsocial && (
          <a
            href={project.igsocial}
            target="_blank"
            rel="noopener noreferrer"
            className="card-footer-item"
          >
            Instagram
          </a>
        )}
        <a
          href={project.fbsocial}
          target="_blank"
          rel="noopener noreferrer"
          className="card-footer-item"
        >
          Facebook
        </a>
        {project.igsocial && (
          <a
            href={project.twsocial}
            target="_blank"
            rel="noopener noreferrer"
            className="card-footer-item"
          >
            Twitter
          </a>
        )}
      </footer>
    </div>
  );
};

render() {
  return (
    <div id="projects"=style {{width: '100%'}}>
      <div
        style == {{
          fontSize:'4em',
          margin: 30,
          marginTop: 0.
          marginBottom: 10
        }}
        >

  )
}
