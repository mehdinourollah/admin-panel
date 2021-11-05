// store.js
import React, { createContext, useReducer } from 'react';
import { ping } from './services';

const initialState = {
  token: ''
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {

    switch (action.type) {
      case 'login':
        sessionStorage.setItem('token', action.token)
        return { token: action.token }
      case 'getToken':
        try {
          async () => {
            let res = await ping()
          }
          return { token: sessionStorage.getItem('token') }
        } catch (e) {
          sessionStorage.removeItem('token')
          return { token: '' }
        }
      case 'logout':
        sessionStorage.removeItem('token')
        return { token: '' }
      default:
        throw new Error()
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }