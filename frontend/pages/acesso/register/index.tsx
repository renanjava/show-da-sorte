import { useState } from 'react';
import React from 'react';
import Head from 'next/head';
import { SITE_NAME } from '../../../../src/constants/constants';
import '../acesso.css';
import validateDto from '../../../../src/usuario/utilities/validate-dto'
import { CreateUsuarioDto } from '../../../../src/usuario/dto/create-usuario.dto'

const RegisterPage: React.FC = () => {

  interface FormData {
    email: string;
    name: string;
    phone: string;
    password: string;
    role: string;
  }
  
  interface FormErrors {
    email?: string;
    name?: string;
    phone?: string;
    password?: string;
  }

  const [formData, setFormData] = useState<FormData>
  ({ 
    email: '', 
    name: '', 
    phone: '', 
    password: '', 
    role: 'usuario'
  });

  const [errors, setErrors] = useState<FormErrors>
  ({

  });

  const handleFormEdit = async (event: React.ChangeEvent<HTMLInputElement>, field: keyof FormData) => {
    const value = event.target.value;
    const newFormData = { ...formData, [field]: value };
    setFormData(newFormData);

    const validationErrors = await validateDto(CreateUsuarioDto, newFormData);
    setErrors(validationErrors);
  };

  const handleForm = async (event) => {
    try{
      event.preventDefault()
      const response = await fetch('http://localhost:4000/usuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });      
      const json = await response.json()
      console.log(response.status)
      console.log(json.message)
    }catch(error){
      console.error('Erro ao registrar usuário: ', error);
    }
  }

  return (
    <>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>{SITE_NAME}</title>
      </Head>
      <div className="acess">
        <img src="/assets/img/acess-bg.png" alt="image" className="acess__bg"/>
        <form onSubmit={handleForm} className="acess__form">
          <h1 className="acess__title">Registro</h1>
          <div className="acess__inputs">
            <div className="acess__box">
              <input type="email" placeholder="Email" required className="acess__input" value={formData.email} onChange={(e) => {handleFormEdit(e, 'email')}}/>
              <i className="ri-mail-fill"></i>
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
            <div className="acess__box">
              <input type="text" placeholder="Nome" required className="acess__input" value={formData.name} onChange={(e) => {handleFormEdit(e, 'name')}}/>
              <i className="ri-mail-fill"></i>
              {errors.name && <p className="error-message">{errors.name}</p>}
            </div>
            <div className="acess__box">
              <input type="text" placeholder="Telefone" required className="acess__input" value={formData.phone} onChange={(e) => {handleFormEdit(e, 'phone')}}/>
              <i className="ri-mail-fill"></i>
              {errors.phone && <p className="error-message">{errors.phone}</p>}
            </div>
            <div className="acess__box">
              <input type="password" placeholder="Senha" required className="acess__input" value={formData.password} onChange={(e) => {handleFormEdit(e, 'password')}}/>
              <i className="ri-lock-2-fill"></i>
              {errors.password && <p className="error-message">{errors.password}</p>}
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
