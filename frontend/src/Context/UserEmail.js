import React, { createContext, useState, useContext } from 'react';

const UserEmailContext = createContext();

export const UserEmailProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState('');

  return (
    <UserEmailContext.Provider value={{ userEmail, setUserEmail }}>
      {children}
    </UserEmailContext.Provider>
  );
};

export const useUserEmail = () => {
  const context = useContext(UserEmailContext);
  if (!context) {
    throw new Error('useUserEmail must be used within a UserEmailProvider');
  }
  return context;
};
