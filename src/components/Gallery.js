import React from 'react';

const PhotoCol = ({ image }) => (
  <div className="six columns">
    <img alt="Kim and Phil" src={image} width="100%" height="auto"/>
  </div>
);

const PhotoRow = ({ images }) => (
  <div className="row">
    <PhotoCol key="image-1" image={images[0]} />
    <PhotoCol key="image-2" image={images[1]} />
  </div>
);

const Gallery = ({ images }) => {
  const photoRows = [];
  for (let i = 0; i < images.length - 1; i += 2) {
    photoRows.push(
      <PhotoRow key={`gallery-${i}`} images={[images[i], images[i+1]]} />
    )
  }
  return (
    <div className="gallery">
      {photoRows}
    </div>
  )
}


export default Gallery;
