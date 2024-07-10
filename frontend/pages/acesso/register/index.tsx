import React, { useState } from 'react';
import Head from 'next/head';
import { SITE_NAME } from '../../../../src/constants/constants';
import '../acesso.css';
import { FormErrors } from './types';
import { getClassName, useFormHandling } from './utilities';

const RegisterPage: React.FC = () => {
  const {
    formData,
    errors,
    isSubmitted,
    isEditing,
    handleFormEdit,
    handleFormSubmit
  } = useFormHandling();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{SITE_NAME}</title>
      </Head>
      <div className="acess">
        <img src="/assets/img/acess-bg.png" alt="image" className="acess__bg" />
        <form onSubmit={handleFormSubmit} className="acess__form">
          <h1 className="acess__title">Registro</h1>
          <div className="acess__inputs">
            <div id="emailDiv" className={getClassName(isEditing, isSubmitted, errors, 'email')}>
              <input
                type="text"
                placeholder="Email"
                className="acess__input"
                value={formData.email}
                onChange={(e) => handleFormEdit(e, 'email')}
              />
              {isSubmitted && errors.email && <span className="error-message">{errors.email}</span>}
              {isSubmitted && !errors.email && <span className="success-message">OK</span>}
            </div>
            <div id="nameDiv" className={`acess__box ${getClassName(isEditing, isSubmitted, errors, 'name')}`}>
              <input
                type="text"
                placeholder="Nome"
                className="acess__input"
                value={formData.name}
                onChange={(e) => handleFormEdit(e, 'name')}
              />
              {isSubmitted && errors.name && <span className="error-message">{errors.name}</span>}
              {isSubmitted && !errors.name && <span className="success-message">OK</span>}
            </div>
            <div id="phoneDiv" className={`acess__box ${getClassName(isEditing, isSubmitted, errors, 'phone')}`}>
              <input
                type="text"
                placeholder="Telefone"
                className="acess__input"
                value={formData.phone}
                onChange={(e) => handleFormEdit(e, 'phone')}
              />
              {isSubmitted && errors.phone && <span className="error-message">{errors.phone}</span>}
              {isSubmitted && !errors.phone && <span className="success-message">OK</span>}
            </div>
            <div id="passwordDiv" className={`acess__box ${getClassName(isEditing, isSubmitted, errors, 'password')}`}>
              <input
                type="password"
                placeholder="Senha"
                className="acess__input"
                value={formData.password}
                onChange={(e) => handleFormEdit(e, 'password')}
              />
              {isSubmitted && errors.password && <span className="error-message">{errors.password}</span>}
              {isSubmitted && !errors.password && <span className="success-message">OK</span>}
            </div>
          </div>
          <button type="submit" className="acess__button">Registrar</button>
        </form>
      </div>
    </>
  );
};

export default RegisterPage;
