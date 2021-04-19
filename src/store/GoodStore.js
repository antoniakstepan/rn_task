import { types, flow } from "mobx-state-tree";
import { getProducts } from '../helpers';


export const GoodStoreItem = types.model("GoodStore" , {
	id: types.string,
	ownerId: types.string,
	title: types.string,
	description: types.string,
	location: types.string,
	price: types.string,
	createdAt: types.number,
	updateAt: types.null,
	saved: types.optional(types.boolean, false)
})

export const GoodStoreList = types.model("GoodStore",  {
  list: types.array(GoodStoreItem)
})
.actions((store) => ({
	getList: flow(function* getList() {
		try {
			const getItem = yield getProducts().then(item )
			store.list = [...getItem];
		} catch (err) {
			console.log(err)
		}
	}),

	filerItem(title) {
		store.list = store.list.filter(item => item.title.split(' ')[0].toUpperCase().includes(title.toUpperCase()))
	}
}))