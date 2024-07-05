import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/assets/css/main.css';
import '../public/assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../public/assets/vendor/aos/aos.css';
import '../public/assets/vendor/glightbox/css/glightbox.min.css';
import '../public/assets/vendor/swiper/swiper-bundle.min.css';

const Header: React.FC = () => {
  return (
    <>
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container-fluid position-relative d-flex align-items-center justify-content-between">
        <a href="/" className="logo d-flex align-items-center me-auto me-xl-0">
          {/* Uncomment the line below if you also wish to use an image logo */}
          {/* <img src="assets/img/logo.png" alt=""> */}
          <i className="bi bi-camera"></i>
          <h1 className="sitename">Rifas Charamba</h1>
        </a>
        <nav id="navmenu" className="navmenu">
          <ul>
            <li><a href="/" className="active">Início<br /></a></li>
            <li><a href="/premios.html">Prêmios</a></li>
            <li className="dropdown">
              <a href="/regiao.html"><span>Região</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
              <ul>
                <li><a href="/regiao.html">Itambé</a></li>
              </ul>
            </li>
            <li><a href="/contato.html">Contato</a></li>
            <li><a href="/login.html">Login</a></li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
        <div className="header-social-links">
          <a href="#" className="twitter"><i className="bi bi-twitter-x"></i></a>
          <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
          <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
          <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
        </div>
      </div>
    </header>
    <main className="main">
      {/* Hero Section */}
      <section id="hero" className="hero section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center" data-aos="fade-up" data-aos-delay="100">
              <h2><span>Este é o </span><span className="underlight">Rifas Charamba</span> um site<span> onde Itambé e região pode concorrer a prêmios com números da sorte.</span></h2>
              <p>Confira abaixo nossos prêmios disponíveis!</p>
              <a href="#lista-premios" className="btn-get-started">Prêmios<br /></a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery section">
        <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 justify-content-center">
            <ul id="lista-premios" className="row gy-4 justify-content-center">
            </ul>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}

export default Header;
