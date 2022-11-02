import React, { useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';

export const LoginContext = createContext({
  isAuth: false,
  token: '',
  setAuth: () => {},
});

export const LoginProvider = ({ child }) => {
  const [isAuth, setAuth] = useState(localStorage.getItem('isAuth'));
  // eslint-disable-next-line
  const [token, setToken] = useState(localStorage.getItem('token'));
  useEffect(() => {
    localStorage.setItem('isAuth', isAuth);
  }, [isAuth]);
  return (
    <LoginContext.Provider value={{ isAuth, token, setAuth }}>
      {child}
    </LoginContext.Provider>
  );
};

LoginProvider.propTypes = {
  child: PropTypes.element.isRequired,
};
