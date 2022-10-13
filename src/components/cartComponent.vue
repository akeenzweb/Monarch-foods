<template>
    <div class="cart">
        <router-link to="/menu"><p class="back-button"><i style="color:#fff" class="fa fa-chevron-left" aria-hidden="true"></i></p></router-link>
        <h1><b>Cart</b></h1>

        <div v-if="cartArray.length > 0">
            <div class="cart-list" >
                <transition-group name="delete">
                    <ul class="menu" v-for="(cart, index) in cartArray" :key="index">
                        <li><div class="img-box"><img :src="cart.image"></div></li>
                        <li class="details">
                            <h3 class="name"><b>{{cart.name}}</b></h3>
                            <h3 class="quantity" style="display:inline-block"><p style="display:inline-block"><i class="fa fa-minus" aria-hidden="true" @click="decreament(index)"></i></p> {{cart.quantity}} <p style="display:inline-block"><i class="fa fa-plus-circle" aria-hidden="true" @click="increament(index)"></i></p></h3>
                            <h3 class="price">Price: N{{cart.price * cart.quantity}}</h3>
                        </li>
                        <li><i @click="deleteMenu(index)" class="fa fa-times-circle-o cancel" aria-hidden="true"></i></li>
                    </ul>
                </transition-group>
            </div>


            <div class="total-block">
                <ul style="padding: 20px" class="total-row">
                    <li>Total:</li>
                    <li style="float:right">{{totalPrice}}</li>
                </ul>
                <button @click="placeOrder()">Place Order</button>
            </div>
        </div>
        <transition name="empty">
            <div style="text-align:center" v-if="cartArray.length < 1">
                <img class="empty" src="../assets/images/empty_cart.png">
                <h4 style="display: inlne-block">You're Cart is <span style="display: inlne-block;color: rgb(230, 171, 8);">Empty</span></h4>
            </div>
        </transition>

    </div>
</template>

<script>

export default {
    data () {
        return {
            cartArray: [],
            total: 0,
            order: {},
            status: "pending",
            date: null,
            time: null,
            qrcodeId: null,
            user: "jeremy"
        }
    },
    created() {
        this.cartArray = this.$store.state.cart
        //console.log("total =",this.total)
    },
    computed: {
        // This computes the total price of all the prices in the quantity
        totalPrice() {
            return this.cartArray.reduce(function (sum, cart) {
            return sum + (cart.price * cart.quantity)
            }, 0)
        }
    },
    methods: {
        deleteMenu(index) {
            this.cartArray.splice(index, 1)
        },
        decreament(index) {
            if (this.cartArray[index].quantity > 1) {
                this.cartArray[index].quantity--
            } else {
                alert("Minimum quantity for " + this.cartArray[index].name + " is 1")
            }
        },
        increament(index){
            if (this.cartArray[index].quantity < this.cartArray[index].availableQuantity) {
                this.cartArray[index].quantity++
            } else {
                alert("Maximum quantity for " + this.cartArray[index].name + " is reached")
            }
        },
        placeOrder () {
            //This code generates the order qrcode id that would be used as the ID for the order
            var char1 = Math.floor(Math.random() * 10);
            var char2 = Math.floor(Math.random() * 10);
            var char3 = Math.floor(Math.random() * 10);
            var char4 = Math.floor(Math.random() * 10);
            var char5 = Math.floor(Math.random() * 10);
            var char6 = Math.floor(Math.random() * 10);
            var char7 = Math.floor(Math.random() * 10);
            this.qrcodeId = "" + char1 + char2 + char3 + char4 + char5 + char6 + char7 + this.user

            //The code below gets the time the order is placed
            var date = new Date()
            var h = date.getHours()
            var m = date.getMinutes()
            var s = date.getSeconds()
            this.time = h + ":" + m + ":" + s

            var day = date.getDate()
            var month = date.getMonth()+1
            var year = date.getFullYear()
            this.date = day + "/" + month + "/" + year

            //This commits the data of the order to the store array as an object
            console.log(this.cartArray)
            this.total = this.totalPrice
            console.log(this.total)
            this.order.menuList = this.cartArray
            this.order.totalAmount = this.total
            this.order.status = this.status
            this.order.qrcodeId = this.qrcodeId
            this.order.date = this.date
            this.order.time = this.time
            console.log("order =", this.order)
            this.$store.commit("addToOrderList", this.order)

            //This is to save the current order QR that wouyld be used in the success vuew page
            this.$store.commit("saveCode", this.qrcodeId)
            console.log(this.qrcodeId)
            this.$router.push('/location')
        }
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
    height: 150px;
    background: rgb(32,184,100);
    margin-left: -20px;
    margin-right: -20px;
    bottom: 0%;
    position: fixed;
    z-index: 2;
    width: 500px;
    padding-left: 20px;
    padding-right: 20px;
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

@media screen and (max-width: 425px) {
    .total-block {
        width: 100%;
    }
}
</style>