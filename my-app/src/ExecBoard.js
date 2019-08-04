import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
let execs_list = require('./execboard.json');

execs_list.sort((a, b) => {
  return a.priority - b.priority;
});

export default class ExecComponent extends Component {
  getExecs = () => {
    return (
      <Grid
      container
      spacing = {24}
      direction = "row"
      justify = "center">
      {execs_list.map(project => {
        if (project.hidden) {
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

makeCard = (project) => {
  if (project.hidden) {
    return null;
  }
  return (
    <div
      className="card"
      style={{ margin: 20, minWidth: '40vw', maxWidth: '75vw' }}
    >
      <header className="card-header">
        <p className="card-header-title"
        style={{
          fontSize: '1.5em',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        >
          <b> {project.name + " - " + project.role} </b>
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
            </div>
          )}
          <div style={{ textAlign: 'center' }}>
              <b>{project.major}</b>
            </div>
          <i>{project.summary}</i>
          <br />
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
        {project.twsocial && (
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
    <div id="exec" style = {{width: '100%'}}>
      <div
        style = {{
          fontSize:'4em',
          margin: 30,
          marginTop: 0,
          marginBottom: 10
        }}
        >
          <b>Executive Board</b>
          </div>
          {this.getExecs()}
          <br />
      </div>
    );
  }
}
