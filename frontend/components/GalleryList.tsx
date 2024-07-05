import React from 'react';

const GalleryList = () => {
  const createGalleryItems = () => {
    const items = [];
    for (let i = 1; i < 11; i++) {
      items.push(
        <li key={i} className="col-xl-3 col-lg-4 col-md-6">
          <div className="gallery-item h-100">
            <img className="img-fluid" src={`assets/img/gallery/gallery-${i}.jpg`} alt="" />
            <div className="gallery-links d-flex align-items-center justify-content-center">
              <a href={`assets/img/gallery/gallery-${i}.jpg`} title={`Gallery ${i}`} className="glightbox preview-link">
                <i className="bi bi-arrows-angle-expand"></i>
              </a>
              <a href="gallery-single.html" className="details-link">
                <i className="bi bi-link-45deg"></i>
              </a>
            </div>
          </div>
        </li>
      );
    }
    return items;
  };

  return (
    <ul id="lista-premios" className="row gy-4 justify-content-center">
      {createGalleryItems()}
    </ul>
  );
};

export default GalleryList;