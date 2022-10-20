<template>
    <div class="container">

        <button style="margin-bottom:20px"  class="btn btn-success" @click="showModal()">Add menu <i style="margin-left:10px" class="fa fa-plus" aria-hidden="true"></i></button>
        <table class="table table-striped col-md-12">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">categories</th>
                    <th scope="col">Status</th>
                    <th scope="col">Price</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(menu, index) in menus" :key="index">
                    <th scope="row">{{index + 1}}</th>
                    <td style="max-width:100px"><img :src="menu.image"></td>
                    <td style="max-width:100px">{{menu.name}}</td>
                    <td style="max-width:100px">{{menu.category}}</td>
                    <td style="max-width:100px">{{menu.isAvailable}}</td>
                    <td style="max-width:100px">{{menu.price}}</td>
                    <td style="max-width:100px"><button @click="showModal2(); menuToBeEdited(index)" class="btn btn-warning"><i class="fa fa-pencil" aria-hidden="true"></i></button></td>
                    <td style="max-width:100px"><button class="btn btn-danger" @click="deleteMenu(menu.id)"><i class="fa fa-trash-o" aria-hidden="true"></i></button></td>
                </tr>

            </tbody>
        </table>
        <transition name="modal"><addMenu v-show="modal" @closeModal="closeModal = modal = !modal" /></transition>
        <transition name="modal"><editMenu v-show="modal2" @closeModal="closeModal = modal2 = !modal2" :editMenu="selectedIndex" /></transition>
    </div>
</template>

<script>
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore"

import { db } from '@/firebase'
import addMenu from '../modal/addMenu.vue'
import editMenu from '../modal/editMenu.vue'
export default {
    data () {
        return {
            modal: false,
            modal2: false,
            menus: [],
            selectedIndex: {}
        }
    },
    components: {
        addMenu,
        editMenu
    },
    async mounted () {
            //Gets the orders from firebase

            const querySnapshot = await getDocs(collection(db, "menu"));
            querySnapshot.forEach((doc) => {
                const menu = doc.data()
                menu.id = doc.id
                console.log("menu = ", menu)
                this.menus.push(menu)
            })
        },
    methods: {
        showModal () {
            this.modal = true
        },
        showModal2() {
            this.modal2 = true
        },
        menuToBeEdited(index) {
            this.selectedIndex = this.menus[index]
            //alert(this.selectedIndex.name)
        },
        async deleteMenu(index) {
            //var id = index.toString()
            await deleteDoc(doc(db, "menu", index));
            //alert('deleted')
            alert("delete clicked")
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