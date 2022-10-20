<template>
    <div class="modal-background">
        <div class="modal-block">
            <i style="float:right" @click="closeModal()" class="fa fa-times" aria-hidden="true"></i><br>
            <!--<img style="float:right" @click="closeModal()" src="/src/assets/images/close-square.svg"><br>-->
            <hr>
            <div class="details">
                <h3>Edit {{editMenu.name}}</h3>
                <form>
                    <input type="text" placeholder="" v-model="editedMenu.name" required ><br>
                    <input type="number" placeholder="" v-model="editedMenu.price" required><br>
                    <select v-model="category" required >
                        <option value="" disabled selected>Choose Category</option>
                        <option :value="category" v-for="(category, index) in categories" :key="index">{{category}}</option>
                    </select><br>
                    <input type="text" placeholder="" v-model="editedMenu.description" required><br>
                    <input type="text" placeholder="" v-model="editedMenu.image" required><br>
                    <!--<input type="text" placeholder="Name of menu" v-model="name" required><br>-->
                    <input type="number" placeholder="" v-model="editedMenu.availableQuantity" required><br>
                    <select v-model="isAvailable" required>
                        <option value="" disabled selected>Is Available</option>
                        <option value="true">True</option>
                        <option value="false">False</option>
                    </select><br>
                </form>


            </div>
            <button class="btn btn-success" @click="submit(editMenu.id)">Update</button>
        </div>
        <!--<div class="modal">
            cool<br> djjjjsj<br> jsdusdhsd<br> ruihudh4ud d34uihdu34u43hd 3dh4uhu3hd3 d3h4uih3uhf j3iuhuhdf uih5ufu3fuf
        </div>-->
    </div>
</template>

<script>
    import { collection,  getDocs, doc, updateDoc } from "firebase/firestore";
    import { db } from '@/firebase'
    export default {
        props: {
            //itemViewed: {}
            editMenu: {}
        },
        data () {
            return {
               editedMenu: {},
               categories: []
            }
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
        watch: {
            // this assigns the prop to a new object
            editMenu() {
                this.editedMenu = this.$props.editMenu
            }
        },
        methods: {
            closeModal () {
                this.$emit("closeModal")
            },
            async submit(id) {
                //const washingtonRef = doc(db, "cities", "DC");

            // Set the "capital" field of the city 'DC'
                await updateDoc(doc(db, "menu", id),{
                //await updateDoc(washingtonRef, {
                    name: this.editedMenu.name,
                    price: this.editedMenu.price,
                    category: this.editedMenu.category,
                    description: this.editedMenu.description,
                    image: this.editedMenu.image,
                    quantity: this.editedMenu.quantity,
                    availableQuantity: this.editedMenu.availableQuantity,
                    isAvailable: this.editedMenu.isAvailable
                });
                alert("Menu updated")
            }
        }
    }
</script>

<style scoped>
.modal-background {
    width: 100%;
    height: 200%;
    background: rgba(0, 0, 0, 0.75);
    position: absolute;
    top: 0;

    left: 0;

    display: flex;
    justify-content: center;
    align-items: flex-start;

    overflow: hidden;

  }

  .modal-block {
    padding: 20px;
    width: 50%;
    height: 550px;
    border-radius: 8px;
    /*border: 3px solid green;*/
    /*height: 550px;*/
    background: #fff;
    position: absolute;
    overflow-y: scroll;
  }
  ::-webkit-scrollbar {
    width: 10px;
    }

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 5px;
}
  ::-webkit-scrollbar-thumb {
  background: rgb(32,184,100);
  border-radius: 5px;
}
  .details  {
    margin-top: 30px;
  }
  .details .img-block {
    width: 250px;
    height: 250px;
    text-align: center;
    display: flex;
    justify-content: center;
    overflow: hidden;
    border-radius:  30px 30px 30px 30px;
    margin: auto;
  }
.details img {
    transition: all 0.5s ease;
}
.details img:hover {
    transform: scale(1.1);
    transition: all 0.5s ease;
}
.details button {
    background:#fff;
    border: none;
    height: 35px;
    color: rgb(32,184,100);
    text-align: left;
    cursor: pointer;
    margin-top: -10px;
    margin-left: 5px;
    font-size: 20px;
}
.details .name {
    color: black;
    font-family: Poppins;
    font-size: 22px;
    margin-left: 10px;
    margin-top: 20px;
}
.details .price {
    color: rgb(255, 196, 0);
    margin-top: -25px;
    font-size: 20px;
    font-style: italic;
    margin-left: 10px;
}
.details .description {
    color: rgb(199, 196, 196);
    margin-top: 5px;
    font-size: 16px;
    font-style: italic;
    margin-left: 10px;
}

input, select{
    width: 100%;
    height: 45px;
    margin-top: 20px;
    padding-left: 20px;
    border-radius: 10px;
    outline: none;
    border: 1px solid green;
    color: green;
    transition: all 0.4s ease;
}
input[type='submit'] {
    background:  rgb(32,184,100);
    color: #fff;
}
input:focus {
    padding-left: 30px;
    transform: scale(1.04);
    transition: all 0.4s ease;
}
button {
    /*background:  rgb(32,184,100);
    color: #fff;*/
    width: 100%;
    height: 45px;
    margin-top: 20px;
    /*padding-left: 20px;*/
    border-radius: 10px;
}
.btn {
    text-align: center;
    background:  rgb(32,184,100);
    color: #fff;
    margin-top: 20px;
}
</style>