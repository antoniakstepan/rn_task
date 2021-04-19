import React from "react";
import { types, onSnapshot } from "mobx-state-tree";
// import { TodoLIstModal } from "./TodoStore";
// import { GroupLIstModal } from "./GroupStore";
// import { autorun } from "mobx";
// import createPersist from "./persist";
import { GoodStoreList } from './GoodStore';
import { useLocalStore } from "mobx-react-lite";

export const RootStore = types.model("RootStore", {
  goodsLetest: types.optional(GoodStoreList, {})
});

export const rootStore = RootStore.create({});
onSnapshot(rootStore, (snapshot) => prettyPrint(snapshot));

const storeContext = React.createContext<RootStore | null>(null)

export const Provider = ({children}) => {
  const store = useLocalStore(rootStore)

  return <storeContext.Provider value={store}>{children}</storeContext.Provider>
}

export const useStore = () => {
  const store = React.useContext(storeContext)
  
  if(!store) {
    throw new Error('useStore must be used within a StoreProvider.')
  }

  return store;
}
