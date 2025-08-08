// Shows uploaded/stored images

import React from 'react';

const ImageBank = ({ images, onSelect }) => (
  <div>
    <h4>Image Bank</h4>
    <div className="image-bank">
      {images.map((img, idx) => (
        <img
          key={img.id || idx}
          src={img.url}
          alt={img.label || 'item'}
          onClick={() => onSelect(img)}
          style={{ cursor: 'pointer', width: 48, height: 48, margin: 4 }}
        />
      ))}
    </div>
  </div>
);

export default ImageBank;