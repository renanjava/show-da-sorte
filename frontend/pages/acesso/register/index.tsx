import { useState } from 'react';
import React from 'react';
import Head from 'next/head';
import { SITE_NAME } from '../../../../src/constants/constants';
import '../acesso.css';

const RegisterPage: React.FC = () => {
  interface FormErrors {
    email?: string;
    name?: string;
    phone?: string;
    password?: string;
  }

  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
    password: '',
    role: 'usuario'
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isEditing, setIsEditing] = useState<string | null>(null);

  const handleFormEdit = (event: React.ChangeEvent<HTMLInputElement>, name: keyof typeof formData) => {
    setFormData({ ...formData, [name]: event.target.value });
    setErrors({ ...errors, [name]: '' });
    setIsEditing(name);
  };

  const handleForm = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      setIsSubmitted(true);
      setIsEditing(null);

      const response = await fetch('http://localhost:4000/usuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.status === 400) {
        const json = await response.json();
        console.log(response.status);
        console.log(json);
        const { message } = json;
        const fieldErrors: FormErrors = {};

        if (Array.isArray(message)) {
          message.forEach(msg => {
            if (/\bemail\b/i.test(msg)) {
              fieldErrors.email = msg;
            } else if (/\bnome\b/i.test(msg)) {
              fieldErrors.name = msg;
            } else if (/\btelefone\b/i.test(msg)) {
              fieldErrors.phone = msg;
            } else if (/\bsenha\b/i.test(msg)) {
              fieldErrors.password = msg;
            }
          });
        }

        setErrors(fieldErrors);
        return;
      }

      const json = await response.json();
      console.log(response.status);
      console.log(json);
    } catch (error) {
      console.error('Erro ao registrar usuário: ', error);
    }
  };

  return (
    <>
  <Head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{SITE_NAME}</title>
  </Head>
  <div className="acess">
    <img src="/assets/img/acess-bg.png" alt="image" className="acess__bg" />
    <form onSubmit={handleForm} className="acess__form">
      <h1 className="acess__title">Registro</h1>
      <div className="acess__inputs">
        <div className={`acess__box ${isEditing ? '' : isSubmitted && errors.email ? 'has-error' : isSubmitted && !errors.email ? 'has-success' : ''}`}>
          <input type="text" placeholder="Email" className="acess__input" value={formData.email} onChange={(e) => handleFormEdit(e, 'email')} />
          {isSubmitted && errors.email && <span className="error-message">{errors.email}</span>}
          {isSubmitted && !errors.email && <span className="success-message">OK</span>}
        </div>
        <div className={`acess__box ${isEditing ? '' : isSubmitted && errors.name ? 'has-error' : isSubmitted && !errors.name ? 'has-success' : ''}`}>
          <input type="text" placeholder="Nome" className="acess__input" value={formData.name} onChange={(e) => handleFormEdit(e, 'name')} />
          {isSubmitted && errors.name && <span className="error-message">{errors.name}</span>}
          {isSubmitted && !errors.name && <span className="success-message">OK</span>}
        </div>
        <div className={`acess__box ${isEditing ? '' : isSubmitted && errors.phone ? 'has-error' : isSubmitted && !errors.phone ? 'has-success' : ''}`}>
          <input type="text" placeholder="Telefone" className="acess__input" value={formData.phone} onChange={(e) => handleFormEdit(e, 'phone')} />
          {isSubmitted && errors.phone && <span className="error-message">{errors.phone}</span>}
          {isSubmitted && !errors.phone && <span className="success-message">OK</span>}
        </div>
        <div className={`acess__box ${isEditing ? '' : isSubmitted && errors.password ? 'has-error' : isSubmitted && !errors.password ? 'has-success' : ''}`}>
          <input type="password" placeholder="Senha" className="acess__input" value={formData.password} onChange={(e) => handleFormEdit(e, 'password')} />
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
