import { useState } from 'react';
import { FormErrors } from './types';

export function getClassName(isEditing: string | null, isSubmitted: boolean, errors: FormErrors, id: string): string {
  const hasError = isSubmitted && errors[id];
  const hasSuccess = isSubmitted && !errors[id];

  return `acess__box ${isEditing ? '' : hasError ? 'has-error' : hasSuccess ? 'has-success' : ''}`;
}

export const useFormHandling = () => {
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

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
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

  return {
    formData,
    errors,
    isSubmitted,
    isEditing,
    handleFormEdit,
    handleFormSubmit
  };
};

