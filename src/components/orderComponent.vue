<template>
    <div class="cart">
        <router-link to="/"><p class="back-button"><i style="color:#fff" class="fa fa-chevron-left" aria-hidden="true"></i></p></router-link>
        <h1><b>My Orders</b></h1>

        <div v-if="orderArray.length > 0">
            <div class="cart-list" >
                <transition-group name="delete">
                    <ul class="menu" v-for="(order, index) in orderArray" :key="index">
                        <li><div class="img-box"><qrcode-vue :value="order.qrcodeId" :size="100" level="H" /></div></li>
                        <li class="details">
                            <h3 class="name"><b>{{index + 1}}: {{order.qrcodeId}}</b></h3>
                            <h3 class="price" style="display:inline-block">{{order.time}} | {{order.date}}</h3>
                            <h3 class="price">{{order.status}}</h3>
                            <h3 class="price">{{order.totalAmount}}</h3>
                            <h3 class="price" @click="viewMore = !viewMore; view(index)">View</h3>
                        </li>
                        <li><i @click="deleteOrder(index)" class="fa fa-times-circle-o cancel" aria-hidden="true"></i></li>
                    </ul>
                </transition-group>
            </div>

            <transition name="view">
                <div class="total-block order-details" style="color:#fff" v-if="viewMore">
                    <div style="text-align:center"><img src="../assets/images/line.png"></div>
                    <i @click="viewMore = !viewMore" style="color:#fff;float:right" class="fa fa-times-circle fa-2x" aria-hidden="true"></i>
                    <div style="text-align:center;margin-top:50px;"><qrcode-vue style="padding:10px;border:2px solid #fff" :value="order.qrcodeId" :size="200" level="H" /></div>
                    <ul style="padding: 20px" class="total-row">
                        <li>Total:</li>
                        <li style="float:right">{{order.totalAmount}}</li>
                    </ul>
                    <h5 >Date: {{order.date}} | {{order.time}}</h5>
                    <ul>
                        <li v-for="(cart, index) in order" :key="index">{{cart.name}}({{cart.quantity}})  - {{cart.price * cart.quantity}}</li>
                    </ul>
                    <!--<button @click="placeOrder()">Place Order</button>-->
                </div>
            </transition>


        </div>
        <transition name="empty">
            <div style="text-align:center" v-if="orderArray.length < 1">
                <img class="empty" src="../assets/images/orders.gif">
                <!--<h4 style="display: inlne-block">You have no active order <span style="display: inlne-block;color: rgb(230, 171, 8);">Empty</span></h4>-->
            </div>
        </transition>

    </div>
</template>

<script>
import QrcodeVue from 'qrcode.vue'
export default {
    data () {
        return {
            orderArray: [],
            total: 0,
            order: [],
            cartInOrder: [],
            viewMore: false
        }
    },
    components: {
            QrcodeVue
    },
    created() {
        this.orderArray = this.$store.state.orderList
        console.log("orderarray =",this.orderArray)
    },
    methods: {
        deleteOrder(index) {
            this.orderArray.splice(index, 1)
            alert("Order has being cancelled")
        },


        //placeOrder () {
        //    console.log(this.cartArray)
        //    this.total = this.totalPrice
        //    console.log(this.total)
        //    this.order.menuList = this.cartArray
        //    this.order.totalAmount = this.total
        //    console.log("order =", this.order)
        //    this.$store.commit("addToOrderList", this.order)

        //    this.$router.push('/location')
        //},
        view(index) {
            this.order.length = 0
            this.order = this.orderArray[index].menuList
            console.log("order = ", this.order)
            console.log("this.order array = ",this.orderArray)
            //this.cartInOrder = this.order.menuList
        }
    },
    computed: {
        totalPrice() {
            return this.cartArray.reduce(function (sum, cart) {
            return sum + (cart.price * cart.quantity)
            }, 0)
        },

    }
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Poppins:wght@300;500;600&display=swap');
@import url('http://fonts.cdnfonts.com/css/euclid-circular-a');

.back-button {
    background: rgb(32,184,100);
    text-align: center;
    width: 50px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 12px;
}

.cart {
    padding: 20px;
    font-family: 'Euclid Circular A';
}
.cart-list {
    margin-bottom: 150px;
}
.menu {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    /*border: 2px solid green;*/
    padding: 0px;
    position: relative;
    padding-left: 5px;
    /*display: flex;
    justify-content: space-between;*/
}
.menu li:nth-child(1) {
    margin-left: 0px;
}
.cancel {
    position: absolute;
    top: 20px;
    right: 20px;
    transform: scale(1.3);
    color: green;
}
.menu li {
    display: inline-block;
    list-style: none;
    /*border: 1px solid yellow;*/
}
.menu .img-box {
    width: 100px;
    height: 100px;
    overflow: hidden;
    text-align: center;
    display: flex;
    justify-content: center;
    border-radius: 20px;
    margin-top: 10px;
    /*border: 3px solid red*/
}
.menu .details {
    /*margin-bottom: 50px;*/
    margin-left: 5%;
    /*border: 3px solid aqua;*/
    max-width: 160px;
    transform: translateY(-10px);
}
.menu .name {
    font-size: 18px;
    width: 150px;
    white-space: nowrap;
    overflow: hidden !important;
    text-overflow: ellipsis;
    margin-top: 20px;
}
.menu .quantity {
    font-size: 18px;
    transform: translateY(10px);
}
.menu .price {
    font-size: 16px;
    font-style: italic;
    color: rgb(230, 171, 8);
}
.fa-minus {
    color: green;
    margin-right: 15px;
}
.fa-plus-circle {
    color: green;
    margin-left: 15px;
}
.total-block {
    height: 450px;
    background: rgb(32,184,100);
    margin-left: -20px;
    margin-right: -20px;
    bottom: 0%;
    position: fixed;
    z-index: 2;
    width: 500px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 20px 20px 0px 0px;
    padding-top: 10px;

    overflow: scroll;
}
.total-row {
    margin-left: -20px;
    margin-right: -20px;
}
.total-row li {
    display: inline-block;
    list-style: none;
    color: #fff;
    font-weight: 500;
}
.total-block button {
    width: 100%;
    padding-top: 14px;
    padding-bottom: 14px;
    border-radius: 8px;
    border-radius: 8px;
    background: #fff;
    border: none;
    transition: all 0.5s ease;
}
@keyframes click {
    from {transform:scale(0.9);transition: all 0.5s ease;};
    to {transform: scale(1);transition: all 0.5s ease;}
}
.total-block button:active {
    transform: scale(0.8);
    /*animation: click 0.4s ;*/
    transition: all 0.5s ease;
}
/*.total-block button:hover {
    transform: scale(0.8);
    transition: all 0.5s ease;
}*/
.delete-leave-from {
  opacity: 1;
  transform: scale(1);
}
.delete-leave-to {
  opacity: 0;
  transform: scale(0);
}
.delete-leave-active {
  transition: all 0.4s ease;
}

.empty-enter-from {
  opacity: 0;
  transform: translateY(50px);
}
.empty-enter-to {
  opacity: 1;
  transform: translateY(0px);
}
.empty-enter-active {
  transition: all 0.8s ease;
}
.empty {
    margin-top: 80px;
    width: 100%;
    height: 100%;
}

.view-enter-from {
  /*opacity: 0;*/
  transform: translateY(500px);
}
.view-enter-to {
  /*opacity: 1;*/
  transform: translateY(0px);
}
.view-enter-active {
  transition: all 0.8s ease;
}
.view-leave-from {
  /*opacity: 0;*/
  transform: translateY(0px);
}
.view-leave-to {
  /*opacity: 1;*/
  transform: translateY(500px);
}
.view-leave-active {
  transition: all 0.8s ease;
}

@media screen and (max-width: 425px) {
    .total-block {
        width: 100%;
    }
}
</style>