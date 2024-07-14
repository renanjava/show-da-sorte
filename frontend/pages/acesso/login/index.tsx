import React from 'react';
import Head from 'next/head';
import { SITE_NAME } from '../../../../src/constants/constants';
import '../acesso.css';
import { useFormHandling } from './logar';

const LoginPage: React.FC = () => {
  const {
    formData,
    handleFormEdit,
    handleFormSubmit
  } = useFormHandling();
  return (
    <>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>{SITE_NAME}</title>
      </Head>
      <div className="acess">
        <img src="/assets/img/acess-bg.png" alt="image" className="acess__bg"/>
        <form onSubmit={handleFormSubmit} className="acess__form">
          <h1 className="acess__title">Login</h1>
          <div className="acess__inputs">
            <div className="acess__box">
              <input 
              type="text" 
              placeholder="Email" 
              required 
              className="acess__input"
              value={formData.email}
              onChange={(e) => handleFormEdit(e, 'email')}/>
            </div>
            <div className="acess__box">
              <input 
              type="password" 
              placeholder="Senha" 
              required 
              className="acess__input"
              value={formData.password}
              onChange={(e) => handleFormEdit(e, 'password')}/>
            </div>
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
