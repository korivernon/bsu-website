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
            {project.description}
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
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="card-footer-item"
          >
            Link
          </a>
        )}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="card-footer-item"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
};
