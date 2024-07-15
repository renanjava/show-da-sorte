import { URL_BACKEND } from "../../../src/constants/constants";

function getToken(): string | null {
    return sessionStorage.getItem('jwtToken');
  }

export async function arquivoTemporario(){
    const response = await fetch(`${URL_BACKEND}/usuario`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${getToken()}`,
          'Content-Type': 'application/json',
        },
        redirect: 'follow',
      })
    const json = await response.json()
    console.log(response.status)
    console.log(json)
    console.log(getToken())
}
