import { useState } from 'react';
import { FormErrors } from './types';

export function getClassName(isEditing: string[] | null, isSubmitted: boolean, errors: FormErrors, id: string): string {
  const hasError = isSubmitted && errors[id];
  const hasSuccess = isSubmitted && !errors[id];

  return `acess__box ${isEditing?.includes(id) ? '' : hasError ? 'has-error' : hasSuccess ? 'has-success' : ''}`;
}

export const useFormHandling = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
    password: '',
    role: 'usuario'
  });

  const errorMappings: { [key: string]: RegExp } = {
    email: /\bemail\b/i,
    name: /\bnome\b/i,
    phone: /\btelefone\b/i,
    password: /\bsenha\b/i
  };

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isEditing, setIsEditing] = useState<string[]>([]);

  const handleFormEdit = (event: React.ChangeEvent<HTMLInputElement>, field: keyof typeof formData) => {
    setFormData({ ...formData, [field]: event.target.value });
    setErrors({ ...errors, [field]: '' });
    setIsEditing(prevEditing => [...prevEditing, field]);
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      setIsSubmitted(true);
      setIsEditing([]);

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
            Object.keys(errorMappings).forEach(key => {
              if (errorMappings[key].test(msg)) {
                fieldErrors[key] = msg;
              }
            });
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

