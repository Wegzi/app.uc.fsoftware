import React, { useReducer, createContext, useEffect } from 'react';
import AppReducer, { initialState } from './reducers/AppReducer';

export const AppContext = createContext(initialState);

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    try {
      const rawUser = localStorage.getItem('user');
      if (rawUser) {
        const user = JSON.parse(rawUser);
        setUser(user);
      }
    } catch (error) {}
  }, []);
  function setUser(user) {
    dispatch({ type: 'SET_USER', payload: user });
  }

  return (
    <AppContext.Provider value={{ setUser, ...state }}>
      {children}
    </AppContext.Provider>
  );
}
