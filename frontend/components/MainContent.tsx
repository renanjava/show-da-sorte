import React from 'react';
import GalleryList from './GalleryList';

const MainContent: React.FC = () => {
  return (
    <main className="main">
    <section id="hero" className="hero section">

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center" data-aos-delay="100">
            <h2><span>Este é o </span><span className="underlight">Rifas Charamba</span> um site<span> onde Itambé e região pode concorrer a prêmios com números da sorte.</span></h2>
            <p>Confira abaixo nossos prêmios disponíveis!</p>
            <a href="#lista-premios" className="btn-get-started">Prêmios</a>
          </div>
        </div>
      </div>

    </section>

    <section id="gallery" className="gallery section">

      <div className="container-fluid" data-aos-delay="100">
        <div className="row gy-4 justify-content-center">
          <ul id="lista-premios" className="row gy-4 justify-content-center">
            <GalleryList />
          </ul>
        </div>
      </div>
    </section>

  </main>
  );
}

export default MainContent;
