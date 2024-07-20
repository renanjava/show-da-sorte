import { useState } from 'react';
import { FormErrors } from './types';
import { URL_BACKEND } from '../../../../src/constants/constants';

export function getClassName(isEditing: string[] | null, isSubmitted: boolean, errors: FormErrors, id: string): string {
  const hasError = isSubmitted && errors[id]
  const hasSuccess = isSubmitted && !errors[id]

  return `acess__box ${isEditing?.includes(id) ? '' : hasError ? 'has-error' : hasSuccess ? 'has-success' : ''}`
}

export const useFormHandling = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
    password: ''
  });

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isEditing, setIsEditing] = useState<string[]>([])

  const handleFormEdit = (event: React.ChangeEvent<HTMLInputElement>, field: keyof typeof formData) => {
    setFormData({ ...formData, [field]: event.target.value })
    setErrors({ ...errors, [field]: '' })
    setIsEditing(prevEditing => [...prevEditing, field])
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault()
      setIsSubmitted(true)
      setIsEditing([])
      const response = await fetch(`${URL_BACKEND}/usuario`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          {
            ...formData, 
            phone: `+55${formData.phone}`
          })
      });
      if (response.status === 400) {
        const json = await response.json()
        console.log(response.status)
        console.log(json)
        const { message } = json
        const fieldErrors: FormErrors = {}

        if (Array.isArray(message)) {
          message.forEach(msg => {
            if (/\bemail\b/i.test(msg)) 
              fieldErrors.email = msg
            else if (/\bnome\b/i.test(msg)) 
              fieldErrors.name = msg
            else if (/\btelefone\b/i.test(msg)) 
              fieldErrors.phone = msg
            else if (/\bsenha\b/i.test(msg)) 
              fieldErrors.password = msg
          });
        }

        setErrors(fieldErrors)
        return
      }

      if(response.status == 201){
        window.location.href = '/acesso/login'
      }
      
    } catch (error) {
      console.error('Erro ao registrar usuário: ', error)
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

