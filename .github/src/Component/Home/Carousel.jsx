import React, { useState, useEffect } from "react";

const Carousel = () => {
  // Picsum image IDs to use
  const imageIds = [237, 238, 239, 240, 241];

  // Generate URLs dynamically
  const images = imageIds.map(
    (id) => `https://picsum.photos/id/${id}/800/400`
  );

  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {images.map((url, index) => (
          <div
            key={url}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img src={url} className="d-block w-100" alt={`Slide ${index + 1}`} />
            <div className="carousel-caption d-none d-md-block">
              <h5>Image {index + 1}</h5>
              <p>Sample Picsum photo</p>
            </div>
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
