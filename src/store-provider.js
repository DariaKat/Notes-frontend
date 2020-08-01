import React, { useMemo } from 'react';
import { useLocalStore } from 'mobx-react-lite';
import { createStore } from './store';

const StoreProvider = ({ children }) => {
  const mainStore = useLocalStore(createStore);

  const store = useMemo(() => ({ mainStore }), [mainStore]);

  return (
    <storeContext.Provider value={store}>{children}</storeContext.Provider>
  );
};

const storeContext = React.createContext(null);

export { StoreProvider, storeContext };
