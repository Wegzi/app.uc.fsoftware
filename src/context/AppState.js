import React, { useReducer, createContext, useEffect } from 'react';
import AppReducer, { initialState } from './reducers/AppReducer';

export const AppContext = createContext(initialState);

const HIERARCH = {
  administrator: 0,
  coordinator: 1,
  student: 2,
  user: 3,
};

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
  useEffect(() => {
    const user = state.user;
    const userHierarch = HIERARCH[user?.role];
    const allowedRoles = Object.keys(HIERARCH).filter(
      role => HIERARCH[role] > userHierarch
    );
    dispatch({ type: 'SET_HIERARCH', payload: allowedRoles });

    const rules = {
      create_users: userHierarch < 0,
      read_users: userHierarch <= 1,
      update_user: userHierarch <= 1,
      delete_user: userHierarch <= 1,
      create_services: userHierarch <= 1,
      update_services: userHierarch <= 1,
      delete_services: userHierarch <= 1,
    };

    dispatch({ type: 'SET_RULES', payload: rules });
  }, [state.user]);
  function setUser(user) {
    dispatch({ type: 'SET_USER', payload: user });
  }
  return (
    <AppContext.Provider value={{ setUser, ...state }}>
      {children}
    </AppContext.Provider>
  );
}
