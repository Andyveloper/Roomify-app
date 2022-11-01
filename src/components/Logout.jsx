import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import { LoginContext } from '../auth/UserAuth';

function Logout() {
  // eslint-disable-next-line
  const { isAuth, setAuth } = useContext(LoginContext);
  const handleClick = async (e) => {
    e.preventDefault();
    const url = 'http://roomifyap.herokuapp.com/logout';
    const storageInfo = JSON.parse(localStorage.getItem('userInfo'));
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${storageInfo.token}`,
      },
    });
    if (response.status === 200) {
      setAuth(localStorage.setItem('isAuth', false));
      window.location.href = '/';
    }
    return response;
  };
  return (
    <button class="logout-button">
     Logout
    </button>
  );
}

export default Logout;
