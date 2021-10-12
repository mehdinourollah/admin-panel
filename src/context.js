// store.js
import React, { createContext, useReducer } from 'react';

const initialState = {
  token: ''
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    console.log({ state, action })
    switch (action.type) {
      case 'login':
        return { token: action.token }
      case 'logout':
        return { token: '' }
      default:
        throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }