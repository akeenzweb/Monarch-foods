<template>
    <div class="container">

        <button style="margin-bottom:20px"  class="btn btn-success" @click="showModal()">Add categories <i style="margin-left:10px" class="fa fa-plus" aria-hidden="true"></i></button>
        <table class="table table-striped col-md-12">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <!--<th scope="col">Image</th>-->
                    <th scope="col">Name</th>
                    <!--<th scope="col">categories</th>-->
                    <th scope="col">Status</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(category, index) in categories" :key="index">
                    <th scope="row">{{index + 1}}</th>
                    <!--<td style="max-width:100px"><img src="https://i.im.ge/2022/10/07/1pKH7r.pa1.png"></td>-->
                    <td style="max-width:100px">{{category}}</td>
                    <!--<td style="max-width:100px">Pasteries</td>-->
                    <td style="max-width:100px">Available</td>
                    <td style="max-width:100px"><button @click="showModal2" class="btn btn-warning"><i class="fa fa-pencil" aria-hidden="true"></i></button></td>
                    <td style="max-width:100px"><button class="btn btn-danger"><i class="fa fa-trash-o" aria-hidden="true"></i></button></td>
                </tr>

            </tbody>
        </table>
        <transition name="modal"><addCategory v-show="modal" @closeModal="closeModal = modal = !modal" /></transition>
        <transition name="modal"><editCategory v-show="modal2" @closeModal="closeModal = modal2 = !modal2" /></transition>
    </div>
</template>

<script>
import { collection, getDocs } from "firebase/firestore"
import { db } from '@/firebase'
import addCategory from '../modal/addCategory.vue'
import editCategory from '../modal/editCategory.vue'
export default {
    data () {
        return {
            modal: false,
            modal2: false,
            categories: []
        }
    },
    components: {
        addCategory,
        editCategory
    },
    async mounted () {
            //Gets the categories from firebase
            const querySnapshot = await getDocs(collection(db, "categories"));
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                const category = doc.data().category_name
                this.categories.push(category)
            });
        },
    methods: {
        showModal () {
            this.modal = true
        },
        showModal2() {
            this.modal2 = true
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