<template>
    <div class="chatBox">

        <transition-group tag="table" name="message" style="margin-bottom: 100px">
            <table class="message-box" v-for="(chat, index) in chatMessages" :key="index">
                <tr><p :class="chat.status == 'user'  ? 'client-class' : 'server-class' ">{{chat.message}}</p></tr>
            </table>
        </transition-group>

        <div class="row">
            <!--<ul class="category">
              <li class="active-btn">{{categories[0]}}</li>
              <li  v-for="(category, index) in categories2" :key="index">{{category}}</li>
            </ul>-->
            <ul class="category">
                <li :class="active[index] ? 'active-btn' : ''" @click="selectCategory(index)" v-for="(category, index) in categories" :key="index">{{category}}</li>
            </ul>

            <transition-group tag="ul" name="menu" appear="" class="menu-list">
                <li v-for="(item, index) in filteredMenu" :key="index">
                    <h1 class="image-box"><img :src="item.image"></h1><br>
                    <h2 class="name"><b>{{item.name}}</b></h2><br>
                    <h2 class="price">${{item.price}}</h2><br>
                    <button @click="addToCartFiltered(index)">Add to Cart</button>
                    <h5 class="view" @click="viewClickedFilteredMenu(index); modal = !modal">View</h5>
                </li>
            </transition-group>
            <!--<ul class="menu-list" style="margin-top:20px">
                <li v-for="(item, index) in menu" :key="index">
                    <span v-if="item.category == selectedCategory">
                        <h1 class="image-box"><img :src="item.image"></h1><br>
                        <h2 class="name"><b>{{item.name}}</b></h2><br>
                        <h2 class="price">${{item.price}}</h2><br>
                        <button>Add to Cart</button>
                    </span>
                </li>
            </ul>-->

        </div>

        <div class="row" style="margin-top:30px">
            <hr style="margin-bottom: 30px">
            <p>Your Favorites</p>

            <ul class="menu-list">
                <li v-for="(item, index) in menu" :key="index">
                    <h1 class="image-box"><img :src="item.image"></h1><br>
                    <h2 class="name"><b>{{item.name}}</b></h2><br>
                    <h2 class="price">${{item.price}}</h2><br>
                    <button @click="addToCart(index)">Add to Cart</button>
                    <h5 class="view" @click="viewClickedMenu(index); modal = !modal">View</h5>
                </li>
            </ul>
        </div>

        <transition name="modal">
            <div v-if="addedToCart" class="added-to-cart">
                <ul>
                    <li style="display:inline-block"><img style="width:50px;height:50px;border-radius:50%" src="../assets/images/bot2.jpg"></li>
                    <li style="display:inline-block">{{viewItemModal.name}} is added to your <router-link to="/cart" style="color: rgb(32,184,100);">Cart</router-link></li>
                </ul>

            </div>
        </transition>

        <!--<div class="form">
            <input v-model="userInput" type="text" @keyup.enter="sendMessage(); analyzeMessage();"><input type="submit" value="send" @click="sendMessage(); analyzeMessage();" >
        </div>-->

        <!--Modal-->
        <transition name="modal"><ViewModal @closeModal = "modal =!modal" v-if="modal" :itemViewed = viewItemModal /></transition>
    </div>
</template>

<script>
    import ViewModal from "../components/viewMenuModal.vue"
    export default {
        data() {
            return {
                modal: false,
                addedToCart: false,
                active: [],
                viewMenuModalArray: [],
                categories: ['Pasteries', 'Pasta', 'Drinks', 'Breakfast', 'Continental'],
                categories2: [],
                selectedCategory: null,
                filteredMenu: [],
                menu: [
                    {
                        name: 'Ham Burger',
                        price: 1500,
                        category: 'Pasteries',
                        description: 'It is very tasty and very low in colestarol and fat',
                        image: 'https://i.im.ge/2022/10/07/1pKH7r.pa1.png',
                        quantity: 1,
                        availableQuantity: 10
                    },
                    {
                        name: 'Spicy Macaroni',
                        price: 3500,
                        category: 'Pasta',
                        description: 'It is very tasty and very low in colestarol and fat',
                        image: 'https://i.im.ge/2022/10/07/1vEWza.pixzolo-photography-O3wkh2jZyo-unsplash.jpg',
                        quantity: 1,
                        availableQuantity: 10
                    },
                    {
                        name: 'Lemonade',
                        price: 1000,
                        category: 'Drinks',
                        description: 'It is very tasty and very low in colestarol and fat',
                        image: 'https://i.im.ge/2022/10/07/1vxlYC.dr2.png',
                        quantity: 1,
                        availableQuantity: 10
                    },
                    {
                        name: 'Egg Curlies',
                        price: 2300,
                        category: 'Breakfast',
                        description: 'It is very tasty and very low in colestarol and fat',
                        image: 'https://i.im.ge/2022/10/07/1vzjUp.ella-olsson-ZjEeMnDiq00-unsplash.jpg',
                        quantity: 1,
                        availableQuantity: 10
                    },
                    {
                        name: 'Zuchini',
                        price: 4000,
                        category: 'Continental',
                        description: 'It is very tasty and very low in colestarol and fat',
                        image: 'https://i.im.ge/2022/10/07/1v3IrM.carly-jayne-Lv174o7fn7Y-unsplash.jpg',
                        quantity: 1,
                        availableQuantity: 10
                    },




                    {
                        name: 'Breakfast Specials',
                        price: 1500,
                        category: 'Breakfast',
                        description: 'It is very tasty and very low in colestarol and fat',
                        image: 'https://i.im.ge/2022/10/07/1J2mcL.18a0f53043f24eca881e945c95f1413c.jpg',
                        quantity: 1,
                        availableQuantity: 10
                    },
                    {
                        name: 'Chicken Burger',
                        price: 3500,
                        category: 'Pasteries',
                        description: 'It is very tasty and very low in colestarol and fat',
                        image: 'https://images.unsplash.com/photo-1521305916504-4a1121188589?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGFtJTIwYnVyZ2VyJTIwaW1hZ2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                        quantity: 1,
                        availableQuantity: 10
                    },
                    {
                        name: 'Coffee',
                        price: 1000,
                        category: 'Drinks',
                        description: 'It is very tasty and Creamy',
                        image: 'https://images.unsplash.com/photo-1422056244210-46cc641fb1fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnw3NTk0NTV8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
                        quantity: 1,
                        availableQuantity: 10
                    },
                    {
                        name: 'Smoothie ',
                        price: 5300,
                        category: 'Drinks',
                        description: 'It is very tasty and Creamy',
                        image: 'https://i.im.ge/2022/10/07/1J2H0C.dr5.png',
                        quantity: 1,
                        availableQuantity: 10
                    },
                    {
                        name: 'Spaghetti',
                        price: 4000,
                        category: 'Pasta',
                        description: 'It is very tasty and very low in colestarol and fat',
                        image: 'https://i.im.ge/2022/10/07/1J2eSm.clark-douglas-17ZU9BPy-Q4-unsplash.jpg',
                        quantity: 1,
                        availableQuantity: 10
                    }
                ],
                //server: true,
                //client: true,
                //userInput: "",
                //userInputCase: null,
                chatMessages: [
                    {status: "bot", message:  "Choose a category"}
                ],
                viewItemModal: {}
            }
        },
        components: {
            ViewModal
        },
        //mounted () {
        //    this.categories2 = this.categories.slice(1)
        //},
        methods: {
            sendMessage(){

                    this.chatMessages.push({
                        status: "user",
                        message: this.userInput
                    })
                    //this.userInput = ''
            },
            selectCategory(index) {
                //The code below assigns the index of the category clicked to an array called active and this the puts the active class on the index of the category
                this.active = []
                this.active[index] = this.categories[index]
                console.log(this.categories[index])
                //The code below assigns the category selected to a variable and this varable filters the menu array to create a new array that would be displayed when you click the category
                this.selectedCategory = this.categories[index]
                this.filteredMenu = this.menu.filter(m => m.category == this.selectedCategory)
            },
            viewClickedFilteredMenu(index) {
                // this.viewMenuModalArray[index] = this.filteredMenu[index]
                // alert(this.viewMenuModalArray[index].name)
                this.viewItemModal = this.filteredMenu[index]
            },
            viewClickedMenu(index) {
                // this.viewMenuModalArray[index] = this.menu[index]
                // alert(this.viewMenuModalArray[index].name)
                this.viewItemModal = this.menu[index]
                // alert(this.viewItemModal.name)
            },
            addToCartFiltered(index) {
                this.viewItemModal = this.filteredMenu[index]
                this.$store.commit("addToCart", this.viewItemModal)
                console.log(this.$store.state.cart[0].name)
                this.addedToCart = true
                setTimeout(()=> {
                    this.addedToCart = false
                }, 3000)
            },
            addToCart(index) {
                this.viewItemModal = this.menu[index]
                this.$store.commit("addToCart", this.viewItemModal)
                console.log(this.$store.state.cart[0].name)
                this.addedToCart = true
                setTimeout(()=> {
                    this.addedToCart = false
                }, 3000)
            }
        }
    }

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Poppins:wght@300;500;600&display=swap');
@import url('http://fonts.cdnfonts.com/css/euclid-circular-a');

* {
    margin: 0px;
    padding: 0px;
}

.chatBox {
    font-family: 'Euclid Circular A';
    padding: 20px;
    background: #fff;
    /*border: 4px solid green;*/
    height: 100vh;
    position: relative;
}
.message-box {
    margin-top: 30px;
}
li {
    list-style: none;
    margin-bottom: 10px;
    display: block;
}
p {
    max-width: 350px;
    padding: 5px 15px;
    border-radius: 15px;
    width: fit-content;
    background: rgb(248, 248, 248);
}
.server-class {
    /*background: rgb(32,184,100);*/
    color: rgb(0, 0, 0);
    float: left;
    display: block;
    border-radius: 0px 15px 15px 15px;
}
.client-class {
    background: rgb(32,184,100);
    color: #fff;
    float: right;
    display: block;
    border-radius: 15px 0px 15px 15px;
}
table {
    width: 100%;
    border-spacing:0 10px;
    overflow-y: scroll;
}
td {
    padding-bottom: 15px;
}
td p {
    max-width: 350px;
    padding: 5px 15px;
    border-radius: 15px;
    width: fit-content;
    background: rgb(248, 248, 248);
}
.form {
    margin: auto;
    position: fixed;
    bottom: 10px;
    width: 450px;
    /*border: 2px solid green;*/
}
input[type='text'] {
    width: 80%;
    height: 40px;
    border-radius: 20px 0px 0px 20px;
    padding-left: 10px;
    padding-right: 10px;
    outline: none;
    border: 1px solid green;
}
input[type='submit'] {
    width: 20%;
    color: #fff;
    background:  rgb(32,184,100);
    border: none;
    height: 40px;
    border-radius: 0px 20px 20px 0px;
}
.message-enter-from {
  opacity: 0;
  transform: scale(0);
}
.message-enter-to {
  opacity: 1;
  transform: scale(1);
}
.message-enter-active {
  transition: all 0.4s ease;
}

.menu-enter-from {
  opacity: 0;
  /*transform: scaleX(0) translateX(500px);*/
}
.menu-enter-to {
  opacity: 1;
  /*transform: scaleX(1) translateX(0);*/
}
.menu-enter-active {
  transition: all 0.8s ease;
}

.menu-leave-from {
  opacity: 1;
  /*transform: scaleX(1) translateX(0px);*/
}
.menu-leave-to {
  opacity: 0;
  /*transform: scaleX(0) translateX(-500);*/
}
.menu-leave-active {
  transition: all 0.8s ease;
}


.modal-enter-from {
  opacity: 0;
  transform: translateY(50px);
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
  transform: translateY(50px);
}
.modal-enter-active {
  transition: all 0.8s ease;
}






.category {
    margin-top: -50px;
  overflow-x: auto;
  /*position: absolute;*/
  display: flex;
}
/*.category::-webkit-scrollbar {
  width: 0;
}*/
.category li {
  list-style: none;
  /*display: inline-block;*/
  min-width: 120px;
  border: 1px solid rgb(231, 231, 231);
  text-align: center;

  padding-top: 8px;
  padding-bottom: 8px;
  margin-right: 5px;
  border-radius: 10px;
}
.active-btn {
  background: rgb(32,184,100);
  color: #fff;
}
.menu-list {
    /*border: 5px solid green;*/
    overflow-x: auto;
    display: flex;
}
.menu-list li {
    display: inline-block;
    /*border: 2px solid red;*/
    width: 150px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius:  30px 30px 0px 0px;
    /*box-shadow: 0 0 50px #ccc;*/
    margin-right: 20px;
    text-align: left;
}
.menu-list .image-box {
    width: 150px;
    height: 150px;
    text-align: center;
    display: flex;
    justify-content: center;
    overflow: hidden;
    border-radius:  30px 30px 30px 30px;
    /*border: 4px solid yellow;*/
}
.menu-list img {
    transition: all 0.5s ease;
}
.menu-list img:hover {
    transform: scale(1.1);
    transition: all 0.5s ease;
}
.menu-list button {
    background:#fff;
    border: none;
    height: 35px;
    color: rgb(32,184,100);
    text-align: left;
    cursor: pointer;
    margin-top: -20px;
    margin-left: 10px;
    font-size: 16px;
}
.menu-list .name {
    color: black;
    font-family: Poppins;
    font-size: 18px;
    margin-left: 10px;
}
.menu-list .price {
    color: rgb(255, 196, 0);
    margin-top: -15px;
    font-size: 16px;
    font-style: italic;
    margin-left: 10px;
}
.menu-list .view {
    color: rgb(216, 216, 216);
    margin-top: -5px;
    font-size: 16px;
    font-style: italic;
    margin-left: 10px;
    cursor: pointer;
}
.added-to-cart {
    text-align: center;
    /*border: 2px solid green;*/
    padding-top: 10px;
    padding-bottom: 10px;
    position: absolute;
    top: 40px;
    background: #fff;
    /*width: 80%;*/
    padding-left: 10px;
    padding-right: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 8px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

@media screen and (max-width: 435px) {
    .form {
        width: 85%;
        /*border: 2px solid green;*/
    }
    .category::-webkit-scrollbar {
        width: 0;
    }
    .menu-list::-webkit-scrollbar {
        width: 0;
    }
}
</style>