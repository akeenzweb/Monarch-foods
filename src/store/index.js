import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: [],
    orderList: []
  },
  getters: {
  },
  mutations: {
    addToCart: (state, newmenu)=> {
      state.cart.push({
        name: newmenu.name,
        price: newmenu.price,
        category: newmenu.category,
        description: newmenu,
        image: newmenu.image,
        quantity: newmenu.quantity,
        availableQuantity: newmenu.availableQuantity
      })
    },
    addToOrderList: (state, neworder) => {
      state.orderList.push(neworder)
    }
  },
  actions: {
  },
  modules: {
  }
})
