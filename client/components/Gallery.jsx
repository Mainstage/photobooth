/**
 * Created by jwent on 3/25/2017.
 */
import React from 'react';

const Gallery = ({ images, select }) => (
  <div className="gallery-container">
    {images.map((img, index) => (
      <img
        src={`photos/${img}`}
        alt=""
        onClick={() => {
          select(index);
        }}
        key={img}
      />
    ))}
  </div>
);

export default Gallery;
