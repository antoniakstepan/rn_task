import { AsyncStorage } from "react-native";
import { types, onSnapshot } from "mobx-state-tree";
// import { TodoLIstModal } from "./TodoStore";
// import { GroupLIstModal } from "./GroupStore";
// import { autorun } from "mobx";
import createPersist from "./persist";
import { GoodStoreList } from './GoodStore';
// import Api from "../api/api";

export const RootStore = types.model("RootStore", {
  goodsLetest: types.optional(GoodStoreList, {})
});

export const rootStore = RootStore.create({});
onSnapshot(rootStore, (snapshot) => prettyPrint(snapshot));

// rootStore.todos.getTodos().then(async () => {
//   // await rootStore.todos.list[0].toggleFavorite();
//   console.log("sss");
// });

// rootStore.goodsLetest.getList().then(async () => {
//     await rootStore.goodsLetest
//     console.log('sss')
// })
// const persist = createPersist(rootStore, AsyncStorage );

// persist.rehydrate();
