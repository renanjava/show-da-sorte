import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/assets/css/main.css';
import '../public/assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../public/assets/vendor/aos/aos.css';
import '../public/assets/vendor/glightbox/css/glightbox.min.css';
import '../public/assets/vendor/swiper/swiper-bundle.min.css';
import { SITE_NAME } from '../../src/constants/constants';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { arquivoTemporario } from '../pages/home/arquivo-temporario';
import Logout from '../pages/home/Logout';
import Acesso from '../pages/home/Acesso';
import Carrinho from '../pages/home/Carrinho';
import Perfil from '../pages/home/Perfil';

const Header: React.FC = () => {

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const token = Cookies.get('authToken');
    console.log(token)
    setIsLoggedIn(!!token);
  }, []);

  return (
    <div>
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container-fluid position-relative d-flex align-items-center justify-content-between">
        <Link href="/" legacyBehavior>
          <a className="logo d-flex align-items-center me-auto me-xl-0">
            <i className="bi bi-camera"></i>
            <h1 className="sitename">{SITE_NAME}</h1>
          </a>
        </Link>
        <nav id="navmenu" className="navmenu">
          <ul>
            <li><a href="/" className="active">Início<br /></a></li>
            <li><a href="/premios.html">Prêmios</a></li>
            <li><button onClick={arquivoTemporario}>Testando</button></li>
            {isLoggedIn ? 
            <li className="dropdown">
              <Perfil />
              <ul>
                <Carrinho />
                <Logout />
              </ul>
            </li> : <li><Acesso /></li>}
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
    </div>
  );
}

export default Header;
