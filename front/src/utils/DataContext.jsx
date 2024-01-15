import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [userId, setUserId] = useState()
  const [isBack, setIsBack] = useState(false)

  const updateUser = (userData) => {
    setUser(userData);
  };
  const updateUserId = (id) => {
    setUserId(id);
  };
  return (
    <DataContext.Provider value={{ user, updateUser, userId, updateUserId, isBack, setIsBack }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
