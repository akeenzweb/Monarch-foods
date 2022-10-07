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
                <li v-for="(category, index) in categories" :key="index">{{category}}</li>
            </ul>

            <ul class="menu-list">
                <li v-for="(item, index) in menu" :key="index">
                    <h1 class="image-box"><img :src="item.image"></h1><br>
                    <h2 class="name"><b>{{item.name}}</b></h2><br>
                    <h2 class="price">${{item.price}}</h2><br>
                    <button>Add to Cart</button>
                </li>
            </ul>
        </div>

        <div class="row" style="margin-top:30px">
            <hr style="margin-bottom: 30px">
            <p>Your Favorites</p>

            <ul class="menu-list" style="margin-top:20px">
                <li v-for="(item, index) in menu" :key="index">
                    <h1 class="image-box"><img :src="item.image"></h1><br>
                    <h2 class="name"><b>{{item.name}}</b></h2><br>
                    <h2 class="price">${{item.price}}</h2><br>
                    <button>Add to Cart</button>
                </li>
            </ul>
        </div>


        <!--<div class="form">
            <input v-model="userInput" type="text" @keyup.enter="sendMessage(); analyzeMessage();"><input type="submit" value="send" @click="sendMessage(); analyzeMessage();" >
        </div>-->

    </div>
</template>

<script>
    export default {
        data() {
            return {
                categories: ['Pasteries', 'Pasta', 'Drinks', 'Breakfast', 'Continental'],
                categories2: [],
                menu: [
                    {
                        name: 'Ham Burger',
                        price: 1500,
                        category: 'Pasteries',
                        description: 'It is very tasty and very low in colestarol and fat',
                        image: 'https://i.im.ge/2022/10/07/1pKH7r.pa1.png'
                    },
                    {
                        name: 'Spicy Macaroni',
                        price: 3500,
                        category: 'Pasta',
                        description: 'It is very tasty and very low in colestarol and fat',
                        image: 'https://i.im.ge/2022/10/07/1vEWza.pixzolo-photography-O3wkh2jZyo-unsplash.jpg'
                    },
                    {
                        name: 'Lemonade',
                        price: 1000,
                        category: 'Drinks',
                        description: 'It is very tasty and very low in colestarol and fat',
                        image: 'https://i.im.ge/2022/10/07/1vxlYC.dr2.png'
                    },
                    {
                        name: 'Egg Curlies',
                        price: 2300,
                        category: 'Breakfast',
                        description: 'It is very tasty and very low in colestarol and fat',
                        image: 'https://i.im.ge/2022/10/07/1vzjUp.ella-olsson-ZjEeMnDiq00-unsplash.jpg'
                    },
                    {
                        name: 'Zuchini',
                        price: 4000,
                        category: 'Continental',
                        description: 'It is very tasty and very low in colestarol and fat',
                        image: 'https://i.im.ge/2022/10/07/1v3IrM.carly-jayne-Lv174o7fn7Y-unsplash.jpg'
                    }
                ],
                //server: true,
                //client: true,
                userInput: "",
                userInputCase: null,
                chatMessages: [
                    {status: "bot", message:  "Choose a category"}
                ],
                response: [
                    'COOL. Can i show you our menu?',
                    'Hi, how are you doing? Would you like to order now',
                    'Type something ...',
                    'Sorry I don\'t understand, please, type something else',
                    'Okay, what would you like to know',
                    'Nice choice'
                ],
                keywords: ['order', 'inquiry', 'takeout', 'delivery', 'okay', 'sure', 'yes', 'hello', ''],
                stringToken: null,
                match: ['match1', 'match2', 'match3', 'match4', 'match5', 'match6', 'match7', 'match8', 'match9']
            }
        },
        mounted () {
            this.categories2 = this.categories.slice(1)
        },
        methods: {
            sendMessage(){

                    this.chatMessages.push({
                        status: "user",
                        message: this.userInput
                    })
                    //this.userInput = ''
            },
            analyzeMessage(){
                this.userInputCase = this.userInput.toLowerCase()
                this.stringToken = this.userInputCase.split(' ')
                //alert(this.stringToken)
                //if(this.userInput == "") {
                //    this.chatMessages.push({
                //        status: "bot",
                //        message: this.response[2]
                //    })
                //}
                //The cose below match[] array checks if the keyword in keywords[] array is in the this.stringToken and assignes it to  match[] array if true
                this.match[0] = this.stringToken.find(v => (this.keywords[0] === v))
                this.match[1] = this.stringToken.find(v => (this.keywords[1] === v))
                this.match[2] = this.stringToken.find(v => (this.keywords[2] === v))
                this.match[3] = this.stringToken.find(v => (this.keywords[3] === v))
                this.match[4] = this.stringToken.find(v => (this.keywords[4] === v))
                this.match[5] = this.stringToken.find(v => (this.keywords[5] === v))
                this.match[6] = this.stringToken.find(v => (this.keywords[6] === v))
                this.match[7] = this.stringToken.find(v => (this.keywords[7] === v))
                this.match[8] = this.stringToken.find(v => (this.keywords[8] === v))

                //The code below checks if the match is equal to the given keyword and gives the bot response

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