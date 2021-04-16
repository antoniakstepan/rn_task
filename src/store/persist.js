import { applySnapshot, onSnapshot } from "mobx-state-tree";

const PERSIST_KEY = "PERSIST";

function createPersist(store, storage) {
  async function rehydrate() {
    const snapShot = await storage.getItem(PERSIST_KEY);

    if (snapShot) {
      applySnapshot(store, JSON.parse(snapShot));
    }
  }

  function purge() {
    storage.removeItem(PERSIST_KEY);
  }

  onSnapshot(store, (snapShot) => {
    storage.setItem(PERSIST_KEY, JSON.stringify(snapShot));
  });

  return {
    rehydrate,
    purge
  };
}

export default createPersist;
