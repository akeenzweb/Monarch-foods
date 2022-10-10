import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: []
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
        image: newmenu.image
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
