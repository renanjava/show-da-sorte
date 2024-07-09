import React from 'react';
import Head from 'next/head';
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
      <div className="acess">
        <img src="/assets/img/acess-bg.png" alt="image" className="acess__bg"/>
        <form action="" className="acess__form">
          <h1 className="acess__title">Registro</h1>
          <div className="acess__inputs">
            <div className="acess__box">
              <input type="email" placeholder="Email" required className="acess__input"/>
              <i className="ri-mail-fill"></i>
            </div>
            <div className="acess__box">
              <input type="text" placeholder="Nome" required className="acess__input"/>
              <i className="ri-mail-fill"></i>
            </div>
            <div className="acess__box">
              <input type="text" placeholder="Telefone" required className="acess__input"/>
              <i className="ri-mail-fill"></i>
            </div>
            <div className="acess__box">
              <input type="password" placeholder="Senha" required className="acess__input"/>
              <i className="ri-lock-2-fill"></i>
            </div>
          </div>
          <button type="submit" className="acess__button">Registrar</button>
          <div className="acess__register">
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterPage;
