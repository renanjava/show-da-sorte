import React from 'react';
import Head from 'next/head';
import { SITE_NAME } from '../../../../src/constants/constants';
import '../acesso.css';

const LoginPage: React.FC = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>{SITE_NAME}</title>
      </Head>
      <div className="acess">
        <img src="/assets/img/acess-bg.png" alt="image" className="acess__bg"/>
        <form action="" className="acess__form">
          <h1 className="acess__title">Login</h1>
          <div className="acess__inputs">
            <div className="acess__box">
              <input type="email" placeholder="Email" required className="acess__input"/>
              <i className="ri-mail-fill"></i>
            </div>
            <div className="acess__box">
              <input type="password" placeholder="Senha" required className="acess__input"/>
              <i className="ri-lock-2-fill"></i>
            </div>
          </div>
          <div className="acess__check">
            <div className="acess__check-box">
              <input type="checkbox" className="acess__check-input" id="user-check"/>
              <label htmlFor="user-check" className="acess__check-label">Lembre-me</label>
            </div>
            <a href="#" className="acess__forgot">Esqueceu a senha?</a>
          </div>
          <button type="submit" className="acess__button">Acessar</button>
          <div className="acess__register">
            Não tem uma conta? <a href="/acesso/register">Registre-se</a>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
