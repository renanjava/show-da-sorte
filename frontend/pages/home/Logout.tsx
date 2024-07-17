import React from 'react'
import Cookies from 'js-cookie'

const Logout: React.FC = () => {

    return (
      <div>
        <a href="/" onClick={() => Cookies.remove("authToken")}>Logout</a>
      </div>
    );
  };
  
  export default Logout;