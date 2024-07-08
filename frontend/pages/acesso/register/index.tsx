import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { SITE_NAME } from '../../../../src/constants/constants';
import '../acesso.css';

const RegisterPage: React.FC = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>{SITE_NAME}</title>
      </Head>
      <div className="login">
        <img src="" alt="image" className="login__bg"/>
        <form action="" className="login__form">
          <h1 className="login__title">Login</h1>
          <div className="login__inputs">
            <div className="login__box">
              <input type="email" placeholder="Email" required className="login__input"/>
              <i className="ri-mail-fill"></i>
            </div>
            <div className="login__box">
              <input type="password" placeholder="Senha" required className="login__input"/>
              <i className="ri-lock-2-fill"></i>
            </div>
          </div>
          <div className="login__check">
            <div className="login__check-box">
              <input type="checkbox" className="login__check-input" id="user-check"/>
              <label htmlFor="user-check" className="login__check-label">Lembre-me</label>
            </div>
            <a href="#" className="login__forgot">Esqueceu a senha?</a>
          </div>
          <button type="submit" className="login__button">Login</button>
          <div className="login__register">
            Não tem uma conta? <Link href="#" legacyBehavior><a>Registre-se</a></Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterPage;
