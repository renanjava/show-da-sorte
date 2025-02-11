import { URL_BACKEND } from "../../../src/constants/constants";
import Cookies from 'js-cookie'

function getToken(): string | null {
    const cookies = Cookies.get('authToken')
    console.log("cookies jwt: " + cookies)
    return cookies;
  }

export async function arquivoTemporario(){
  const tokenCookie = getToken()
  if(tokenCookie){
    const response = await fetch(`${URL_BACKEND}/usuario`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${tokenCookie}`,
        'Content-Type': 'application/json',
      }
    })
    const json = await response.json()
    console.log(json)

    if(response.status == 401){
        console.log("cookies dentro do 401: "+tokenCookie)
        const responseRefresh = await fetch(`${URL_BACKEND}/token/refresh`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(
              {
                oldToken: tokenCookie
              })
          })
          const jsonRefresh = await responseRefresh.json()
          Cookies.set('authToken', jsonRefresh.access_token, { expires: 1 });
          if(!(jsonRefresh.status == 401))
            arquivoTemporario()
          
    }
  }else{
    return;
  }
}