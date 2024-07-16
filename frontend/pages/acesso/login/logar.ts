import { useState } from "react";
import { URL_BACKEND } from "../../../../src/constants/constants";

export interface FormErrors {
  email?: string;
  password?: string;
}

export function getClassName(isEditing: string[], isSubmitted: boolean, errors: FormErrors, isSuccess: boolean, id: string): string {
    const hasError = isSubmitted && errors[id];
    const hasSuccess = isSubmitted && isSuccess && !errors[id];
  
    const isAnyEditing = isEditing.length > 0;
  
    return `acess__box ${isAnyEditing ? '' : hasError ? 'has-error' : hasSuccess ? 'has-success' : ''}`;
  }
  

export const useFormHandling = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isEditing, setIsEditing] = useState<string[]>([]);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleFormEdit = (event: React.ChangeEvent<HTMLInputElement>, field: keyof typeof formData) => {
    setFormData({ ...formData, [field]: event.target.value });
    setErrors({ ...errors, [field]: '' });
    setIsEditing([...isEditing, field]);
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
    setIsEditing([]);

    const response = await fetch(`${URL_BACKEND}/usuario/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const json = await response.json();

    if (response.status === 401) {
      setErrors({ email: '401', password: '401' });
      console.log("sem permissão (dados inválidos)");
      return;
    }

    if (response.status === 201) {
      setIsSuccess(true);
      setErrors({});
      const token = json.access_token;
      window.location.href = '/';
    }
  };

  return {
    formData,
    handleFormEdit,
    handleFormSubmit,
    isSubmitted,
    errors,
    isEditing,
    isSuccess,
  };
};
