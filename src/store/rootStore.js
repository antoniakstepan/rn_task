import React from "react";
import { types, onSnapshot } from "mobx-state-tree";
import { GoodStoreList } from './GoodStore';
import { useLocalObservable } from "mobx-react";

export const RootStore = types.model("RootStore", {
  goodsLetest: types.optional(GoodStoreList, {})
});

export const rootStore = RootStore.create({});
onSnapshot(rootStore, (snapshot) => prettyPrint(snapshot));

const storeContext = React.createContext({})

export const StateProvider = ({children}) => {
  const store = useLocalObservable({})

  return <storeContext.Provider value={store}>{children}</storeContext.Provider>
}

export const useStore = () => {
  const store = React.useContext(storeContext)
  
  if(!store) {
    throw new Error('useStore must be used within a StoreProvider.')
  }

  return store;
}
