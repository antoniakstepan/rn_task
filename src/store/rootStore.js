import React, {createContext, useContext} from "react";
import { types, onSnapshot } from "mobx-state-tree";
import { GoodStoreList } from './GoodStore';
import { values } from "mobx";

export const RootStore = types.model("RootStore", {
  goodsLetest: types.optional(GoodStoreList, {})
});


export const createStore = () => {
  const rootStore = RootStore.create()

  return rootStore;
}

// onSnapshot(RootStore, (snapshot) => prettyPrint(snapshot));

const storeContext = createContext(null)

export const Provider = storeContext.Provider

export function useStore(mapStateToProps) {
  const store = useContext(storeContext)

  if( typeof mapStateToProps === 'function') {
    return mapStateToProps(store)
  }
  return store
}
