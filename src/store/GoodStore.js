import { types, flow } from "mobx-state-tree";
import { getProducts } from '../helpers';


export const GoodStoreItem = types.model("GoodStore" , {
body: types.optional(types.string, ''),
title: types.optional(types.string, ''),
id: types.optional(types.number, 0),
userId: types.optional(types.number, 0),
})

export const GoodStoreList = types.model("GoodStore",  {
  list: types.array(GoodStoreItem)
})
.actions((store) => ({
	getList: flow(function* getList() {
		try {
			const res = yield getProducts()
			store.list = res
			// console.log(store.list)
		} catch (err) {
			console.log(err)
		}
	}),

	filerItem(title) {
		store.list = store.list.filter(item => item.title.split(' ')[0].toUpperCase().includes(title.toUpperCase()))
	}

}))
