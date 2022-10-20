<template>
    <div class="container">
        <div class="row" v-if="scanCode">
            <div class="col-md-3"></div>
            <div class="col-md-6">
                <div style="border: 2px solid green">
                    <client-only>
                        <StreamBarcodeReader
                            @decode="(a) => onDecode(a)"
                        />
                    </client-only>
                </div>
                <h5>Expected Id: {{qrcodeIdToExpect}}</h5>
                <h5>Scanned Id: {{scannedId}}</h5>
                <div v-if="scannedId == qrcodeIdToExpect">
                    <button class="btn btn-success" @click="completeOrder()">Complete Order</button>
                </div>
                <div v-else-if="scannedId == '' "></div>
                <div v-else>
                    <h2 style="color:red"> Scanned code doesn't match <button class="btn btn-warning">Scan Again</button></h2>
                </div>
            </div>
            <div class="col-md-3"></div>
        </div>


        <table class="table table-striped col-md-12">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Location</th>
                    <th scope="col">QRCode ID</th>
                    <th scope="col">Status</th>
                    <!--<th scope="col">PhoneNumber</th>-->
                    <!--<th scope="col">Status</th>-->
                    <th scope="col">Scan</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(delivery, index) in deliveries" :key="index">
                    <th scope="row">{{index + 1}}</th>
                    <td style="max-width:100px">{{delivery.name}}</td>
                    <td style="max-width:100px">{{delivery.location}}</td>
                    <td style="max-width:100px">{{delivery.qrcodeId}}</td>
                    <!--<td style="max-width:100px">{{menu.isAvailable}}</td>-->
                    <!--<td style="max-width:100px">{{menu.price}}</td>-->
                    <td style="max-width:100px">{{delivery.status}}</td>
                    <td style="max-width:100px"><button class="btn btn-default" style="border: 2px solid green" @click="scanQrcode(index)"><i style="color:green" class="fa fa-camera" aria-hidden="true"></i></button></td>
                </tr>

            </tbody>
        </table>
        <!--<transition name="modal"><addMenu v-show="modal" @closeModal="closeModal = modal = !modal" /></transition>
        <transition name="modal"><editMenu v-show="modal2" @closeModal="closeModal = modal2 = !modal2" :editMenu="selectedIndex" /></transition>-->
    </div>
</template>

<script>
import { StreamBarcodeReader } from 'vue-barcode-reader'
import { collection, getDocs, addDoc, doc, deleteDoc } from "firebase/firestore"

import { db } from '@/firebase'
//import addMenu from '../modal/addMenu.vue'
//import editMenu from '../modal/editMenu.vue'
export default {
    data () {
        return {
            modal: false,
            modal2: false,
            deliveries: [],
            scanCode: false,
            qrcodeIdToExpect: null,
            scannedId: "",
            orderToComplete: {}
            //selectedIndex: {}
        }
    },
    components: {
        StreamBarcodeReader
    },
    async mounted () {
            //Gets the orders from firebase

            const querySnapshot = await getDocs(collection(db, "deliveries"));
            querySnapshot.forEach((doc) => {
                const deliveries = doc.data()
                deliveries.id = doc.id
                //console.log("menu = ", menu)
                this.deliveries.push(deliveries)
            })
        },
    methods: {
        //showModal () {
        //    this.modal = true
        //},
        //showModal2() {
        //    this.modal2 = true
        //},
        scanQrcode(index){
            this.scanCode = true
            this.qrcodeIdToExpect = this.deliveries[index].qrcodeId
            this.orderToComplete = this.deliveries[index]
        },
        async onDecode (a) {
            console.log(a)
            this.scannedId = a
            //const qrcodeResponse = a
        },
        async completeOrder() {
            //Add the completed order to history
            await addDoc(collection(db, "history"), this.orderToComplete)

            //Delete the order from delivries
            await deleteDoc(doc(db, "deliveries", this.orderToComplete.id))
        }
    }
}
</script>

<style scoped>
.container {
    margin-top: 30px;
    /*height: 100vh;
    border: 3px solid red;
    overflow-y: scroll;*/

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
td img {
    width: 50px;
    height: 50px;
    border-radius: 12px;
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