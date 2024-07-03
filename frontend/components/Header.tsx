// components/Header.tsx

import React from 'react';

const Header: React.FC = () => {
  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container-fluid position-relative d-flex align-items-center justify-content-between">
  
        <a href="/" className="logo d-flex align-items-center me-auto me-xl-0">
          {/* Uncomment the line below if you also wish to use an image logo */}
          {/* <img src="assets/img/logo.png" alt="" /> */}
          <i className="bi bi-camera"></i>
          <h1 className="sitename">Rifas Charamba</h1>
        </a>
  
        <nav id="navmenu" className="navmenu">
          <ul>
            <li><a href="/" className="active">Início<br /></a></li>
            <li><a href="/premios">Prêmios</a></li>
            <li className="dropdown">
              <a href="/regiao">
                <span>Região</span> <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul>
                <li><a href="/regiao">Itambé</a></li>
              </ul>
            </li>
            <li><a href="/contato">Contato</a></li>
            <li><a href="/login">Login</a></li>
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
  );
};

export default Header;
