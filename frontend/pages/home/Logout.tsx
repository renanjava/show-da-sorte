import React from 'react'
import Cookies from 'js-cookie'

const Logout: React.FC = () => {

    return (
      <div>
        <li><a href="/" onClick={() => Cookies.remove("authToken")}>Sair</a></li>
      </div>
    );
  };
  
  export default Logout;