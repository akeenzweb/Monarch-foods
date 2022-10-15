<template>
    <div class="modal-background">
        <div class="modal-block">
            <i style="float:right" @click="closeModal()" class="fa fa-times" aria-hidden="true"></i><br>
            <!--<img style="float:right" @click="closeModal()" src="/src/assets/images/close-square.svg"><br>-->
            <hr>
            <div class="details">
                <h3>Add Menu</h3>
                <form>
                    <input type="text" placeholder="Name of menu" v-model="name" required><br>
                    <input type="number" placeholder="Price of menu" v-model="price" required><br>
                    <!--<input type="text" placeholder="Name of menu" v-model="name" required><br>-->
                    <input type="text" placeholder="Category of menu" v-model="category" required><br>
                    <input type="text" placeholder="Description of menu" v-model="description" required><br>
                    <input type="text" placeholder="Image link of menu" v-model="image" required><br>
                    <!--<input type="text" placeholder="Name of menu" v-model="name" required><br>-->
                    <input type="number" placeholder="Available quantity of menu" v-model="availableQuantity" required><br>
                    <select v-model="isAvailable" required>
                        <option value="" disabled selected>Is Available</option>
                        <option value="true">True</option>
                        <option value="false">False</option>
                    </select><br>
                    <!--<button class="btn btn-success" @click="submit()">Submit Menu</button>-->
                </form>
            </div>
            <button class="btn btn-success" @click="submit()">Submit</button>
        </div>
        <!--<div class="modal">
            cool<br> djjjjsj<br> jsdusdhsd<br> ruihudh4ud d34uihdu34u43hd 3dh4uhu3hd3 d3h4uih3uhf j3iuhuhdf uih5ufu3fuf
        </div>-->
    </div>
</template>

<script>
    import { collection, addDoc } from "firebase/firestore";
    import { db } from '@/firebase'
    export default {
        props: {
            itemViewed: {}
        },
        data () {
            return {
                name: "",
                price: "",
                category: "",
                description: "",
                image: "",
                availableQuantity: "",
                isAvailable: "",

                addMenu: {}
            }
        },
        methods: {
            closeModal () {
                this.$emit("closeModal")
            },
            async submit() {
                this.addMenu.name = this.name
                this.addMenu.price = this.price
                this.addMenu.category = this.category
                this.addMenu.description = this.description
                this.addMenu.image = this.image
                this.addMenu.availableQuantity = this.availableQuantity
                this.addMenu.isAvailable = this.isAvailable

                console.log("addMenu = ", this.addMenu)
                await addDoc(collection(db, "menu"), this.addMenu)
                // this.$store.commit("addToOrderList", this.fullOrder)
                alert(this.name + " is added to your menu list")

                //This clears the input fields
                this.name =  ""
                this.price =  ""
                this.category =  ""
                this.description =  ""
                this.image =  ""
                this.availableQuantity =  ""
                this.isAvailable =  ""

                this.$emit("closeModal")
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
    top: 55px;
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

input, select {
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
input:focus, select:focus {
    padding-left: 30px;
    transform: scale(1.04);
    transition: all 0.4s ease;
}
</style>