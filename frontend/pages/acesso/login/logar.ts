import { useState } from "react";
import { URL_BACKEND } from "../../../../src/constants/constants";

export const useFormHandling = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
    const handleFormEdit = (event: React.ChangeEvent<HTMLInputElement>, field: keyof typeof formData) => {
        setFormData({ ...formData, [field]: event.target.value });
    };
    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const response = await fetch(`${URL_BACKEND}usuario/login`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        const json = await response.json();
        if(response.status === 401){
            console.log("sem permissão (dados inválidos)")
            return;
        }
        console.log(response.status)
        console.log(json)

        return;
        }
    return {
        formData,
        handleFormEdit,
        handleFormSubmit
        };
}