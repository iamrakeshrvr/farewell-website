import React from 'react';

const Gallery = ({ images }) => {
  return (
    <section>
      <h2><center>Ur chinna chinna kochi memories u shared with me</center></h2>
      <div className="gallery">
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Memory ${index + 1}`} className="gallery-img" />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
