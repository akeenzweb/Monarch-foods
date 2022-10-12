import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: [],
    orderList: [],
    location: null
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
    },
    addLocation: (state, newlocation)=> {
      state.location = newlocation
    }
  },
  actions: {
  },
  modules: {
  }
})
