<template>
    <div class="container">
        <table class="table table-striped col-md-12">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Order</th>
                    <th scope="col">Time</th>
                    <th scope="col">Code</th>
                    <th scope="col">Location</th>
                    <th scope="col">Done</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(order, index) in allOrders" :key="index">
                    <th scope="row">{{index + 1}}</th>
                    <td style="max-width:100px">Mark </td>
                    <td style="max-width:100px"><button class="btn btn-success" @click="showModal(index)">View</button></td>
                    <td style="max-width:100px"><button style="width:170px" class="btn btn-warning">{{order.time}}|{{order.date}}</button></td>
                    <td style="max-width:100px">{{order.qrcodeId}}</td>
                    <td style="max-width:100px">{{order.location}}</td>
                    <td style="max-width:100px"><button @click="orderIsReady(order.id, index)" class="btn btn-info" :style="orderButtonColor ? 'background: green' : '' "><i class="fa fa-check-circle-o" aria-hidden="true"></i></button></td>
                    <transition name="modal"><orderModal :menuObject="menuListSelected" :total="total" v-show="modal" @closeModal="closeModal = modal = !modal" /></transition>
                </tr>

            </tbody>
        </table>

    </div>
</template>

<script>
import { collection, getDocs, addDoc, doc, deleteDoc } from "firebase/firestore"
import { db } from '@/firebase'
import orderModal from './orderModal.vue'
export default {
    data () {
        return {
            modal: false,
            menuListSelected: [],
            total: null,
            orderButtonColor: false,
            delivery: {},
            allOrders: [
                //{
                //    date: '12/11/22',
                //    location: 'lagos',
                //    menuList: [
                //        {
                //            availableeQuantity: 8,
                //            category: 'pasta',
                //            description: {
                //                description: 'very tasty trust me cus ibsaid so'
                //            },
                //            image: 'https://i.im.ge/2022/10/07/1pKH7r.pa1.png',
                //            name: 'Ham burger',
                //            price: 3500,
                //            quantity: 2
                //        }
                //    ],
                //    qrcodeId: '14233jeremy',
                //    status: 'pending',
                //    time: '02:24',
                //    totalAmount: 7000
                //},

                //{
                //    date: '12/11/22',
                //    location: 'Abuja',
                //    menuList: [
                //        {
                //            availableeQuantity: 8,
                //            category: 'drinks',
                //            description: {
                //                description: 'very Juicy'
                //            },
                //            image: 'https://i.im.ge/2022/10/07/1pKH7r.pa1.png',
                //            name: 'Lemonade',
                //            price: 1500,
                //            quantity: 5
                //        }
                //    ],
                //    qrcodeId: '5558833jeremy',
                //    status: 'pending',
                //    time: '07:24',
                //    totalAmount: 7500
                //}
            ]
        }
    },
    components: {
        orderModal
    },
    async mounted () {
            //Gets the orders from firebase
            const querySnapshot = await getDocs(collection(db, "orders"));
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                const orders = doc.data()
                orders.id = doc.id
                this.allOrders.push(orders)
                console.log("all orders", this.allOrders)
            });

            //const querySnapshot2 = await getDocs(collection(db, "menu"));
            //querySnapshot2.forEach((doc) => {
            //    const menu = doc.data()
            //    console.log("menu = ", menu)
            //    this.menu.push(menu)
            //})
        },
    methods: {
        showModal (index) {
            this.modal = true,
            this.menuListSelected = this.allOrders[index].menuList
            this.total = this.allOrders[index].totalAmount
        },
        async orderIsReady(id, index) {
            // this.orderButtonColor = true
            //alert(index)

            // This Adds the Orders to the delivery collection in the database
            this.delivery.name = "mark"
            this.delivery.qrcodeId = this.allOrders[index].qrcodeId
            this.delivery.location = this.allOrders[index].location
            this.delivery.status = "processing"
            console.log("Delivery => ", this.delivery)
            await addDoc(collection(db, "deliveries"), this.delivery)


            // This deletes the order from the Order page and collection
            await deleteDoc(doc(db, "orders", id));

            alert("Order has being moved to Delivery")
        }
    }
}
</script>

<style scoped>
.container {
    margin-top: 30px
}
table {
    width: 100%;

}
th td {
    width: 100px;
}
button {
    border-radius: 8px;
    border: none
}
.modal-enter-from {
  opacity: 0;
  transform: translateY(100px);
}
.modal-enter-to {
  opacity: 1;
  transform: translateY(0px);
}
.modal-leave-active {
  transition: all 0.8s ease;
}

.modal-leave-from {
  opacity: 1;
  transform: translateY(0px);
}
.modal-leave-to {
  opacity: 0;
  transform: translateY(100px);
}
.modal-enter-active {
  transition: all 0.8s ease;
}
</style>