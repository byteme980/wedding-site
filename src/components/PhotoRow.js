import React from 'react';

const PhotoCol = ({ image }) => (
  <div className="six columns">
    <img alt="kim and phil" src={image} width="100%" height="auto"/>
  </div>
);

const PhotoRow = ({ imageOne, imageTwo }) => (
  <div className="row">
    <PhotoCol image={imageOne} />
    <PhotoCol image={imageTwo} />
  </div>
);

export default PhotoRow;
