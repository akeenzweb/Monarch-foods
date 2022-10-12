<template>
    <div class="chatBox">
        <div style="text-align: center;"><img class="location" src="../assets/images/location.gif"></div>

        <transition-group tag="table" name="message" style="margin-bottom: 100px">
            <table class="message-box" v-for="(chat, index) in chatMessages" :key="index">
                <tr>
                    <td><img src="../assets/images/bot2.jpg"></td>
                    <p :class="chat.status == 'user'  ? 'client-class' : 'server-class' ">{{chat.message}}</p></tr>
            </table>
        </transition-group>


        <!--<form>-->
            <div class="form">
                <input v-model="location" type="text" @keyup.enter="sendMessage()"><input type="submit" value="send" @click="sendMessage()" >
            </div>

        <!--</form>-->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                location: "",
                userInput: "",
                userInputCase: null,
                chatMessages: [
                    {status: "bot", message:  "Enter your pickup point"},
                    {status: "bot", message:  "You can put the location of a friend if you are ordering for that friend, but ensure you send them the Order Qr code that you'll recieve shortly"}
                ],
                response: [
                    'COOL. Can i show you our menu?',
                    'Hi, how are you doing? Would you like to order now',
                    'Type something ...',
                    'Sorry I don\'t understand, please, type something else',
                    'Okay, what would you like to know',
                    'Awesome, Have a peek at our menu',
                    'Take a look at our menu'
                ],
                keywords: ['order', 'inquiry', 'takeout', 'delivery', 'okay', 'sure', 'yes', 'hello', '', 'have', 'want'],
                stringToken: null,
                match: ['match1', 'match2', 'match3', 'match4', 'match5', 'match6', 'match7', 'match8', 'match9']
            }
        },
        methods: {
            sendMessage(){
                this.$store.commit("location", this.location )
                this.location = ""
                this.$router.push('/payment')
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
    margin: auto;
    width: 500px;
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
td img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: 3px solid #fff;
    margin-right: 20px;
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

.location {
    width: 300px;
    height: 300px;
}
@media screen and (max-width: 435px) {
    .chatBox {
        width: 100%;
    }
    .form {
        width: 85%;
        /*border: 2px solid green;*/
    }
}
</style>