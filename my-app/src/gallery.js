import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
let image_list = require('./image_gallery.json');

export default class PhotoComponent extends Component {
  const props = (image) => {(
    return (
      <img
      alt={image.alternate}
      data-image={image.image}
      data-description={image.description}
      />
    );
  };

render() {
  return (
    <div id="gallery" style="display:none;">
      <b>Black Student Union Photo Gallery</b>
      {this.getPhotos()}
      <br />
    </div>
    );
  }
}
