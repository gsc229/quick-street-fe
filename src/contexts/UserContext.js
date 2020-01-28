import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  
  const [ user, setUser ] = useState({
    userId: '',
    isVendor: '',
    token: ''
  
  });
  
  const addUser = (newUser) => {
    // console.log('new user ', newUser);
    setUser({
      ...user, 
      userId: newUser.id, 
      token: newUser.token, 
      isVendor: newUser.isVendor
    });
  }

  return (
    <UserContext.Provider value={{ user, addUser }}>
      {children}
    </UserContext.Provider>
  )
}
