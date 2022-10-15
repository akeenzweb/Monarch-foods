import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: [],
    partialOrder: {},
    orderList: [],
    location: null,
    qrHolder: null
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
    },
    saveCode: (state, newCode)=>{
      state.qrHolder = newCode
    },
    addPartialOrder: (state, partialorder) => {
      state.partialOrder = partialorder
    }
  },
  actions: {
  },
  modules: {
  }
})
