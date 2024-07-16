import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import GalleryList from './GalleryList';
import { SITE_NAME } from '../../../src/constants/constants';

const MainContent: React.FC = () => {
  return (
    <div>
    <main className="main">
      <section id="hero" className="hero section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center" data-aos="fade-up" data-aos-delay="100">
              <h2><span>Este é o </span><span className="underlight">{SITE_NAME}</span> um site<span> onde moradores de Itambé pode concorrer a prêmios com números da sorte.</span></h2>
              <p>Confira abaixo nossos prêmios disponíveis!</p>
              <a href="#lista-premios" className="btn-get-started">Prêmios</a>
            </div>
          </div>
        </div>
      </section>
      <section id="gallery" className="gallery section">
        <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 justify-content-center">
              <GalleryList/>
          </div>
        </div>
      </section>
    </main>
    </div>
  );
}

export default MainContent;
