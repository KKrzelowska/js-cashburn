import React, { createContext } from 'react';
import { useLocalStore, useObserver } from "mobx-react";


export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    balance: ['context balance'],
    addBalance: () => {
      store.balance.push(balanceValue);
    }
  }));

  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  )
};

export default StoreProvider;
