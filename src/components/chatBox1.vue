<template>
    <div class="chatBox">
        <!--<ul class="message-box">
            <li><p><span>Hello handsome, I'm Lucy. How can i be of assistance to you. Would you like to order now or make an inquiry</span></p></li><br>
            <li>
                <p :class="client ? 'client-class' : ''"><span>Hi pretty girl, I'm fine</span></p>
                <div class="seperator"></div>
            </li>
            <li><p :class="client ? 'client-class' : ''"><span>igdig</span></p></li>

        </ul>-->


        <!--<table class="message-box">
            <tr><td ><p :class="server ? 'server-class' : ''">Hello handsome, I'm Lucy. How can i be of assistance to you. Would you like to order now or make an inquiry</p></td></tr>
            <tr ><td ><p :class="client ? 'client-class' : ''">Hi pretty girl, I'm fine</p></td></tr>
            <tr><td><p :class="server ? 'server-class' : ''">Cool Baby</p></td></tr>
        </table>-->
        <transition-group tag="table" name="message" style="margin-bottom: 100px">
            <table class="message-box" v-for="(chat, index) in chatMessages" :key="index">
                <tr><p :class="chat.status == 'user'  ? 'client-class' : 'server-class' ">{{chat.message}}</p></tr>
            </table>
        </transition-group>


        <!--<form>-->
            <div class="form">
                <input v-model="userInput" type="text" @keyup.enter="sendMessage(); analyzeMessage();"><input type="submit" value="send" @click="sendMessage(); analyzeMessage();" >
            </div>

        <!--</form>-->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                //server: true,
                //client: true,
                userInput: "",
                userInputCase: null,
                chatMessages: [
                    {status: "bot", message:  "Hello handsome, I'm Lucy.  Would you like to order now or make an inquiry"}
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
                //The code below match[] array checks if the keyword in keywords[] array is in the this.stringToken and assignes it to  match[] array if true
                this.match[0] = this.stringToken.find(v => (this.keywords[0] === v))
                this.match[1] = this.stringToken.find(v => (this.keywords[1] === v))
                this.match[2] = this.stringToken.find(v => (this.keywords[2] === v))
                this.match[3] = this.stringToken.find(v => (this.keywords[3] === v))
                this.match[4] = this.stringToken.find(v => (this.keywords[4] === v))
                this.match[5] = this.stringToken.find(v => (this.keywords[5] === v))
                this.match[6] = this.stringToken.find(v => (this.keywords[6] === v))
                this.match[7] = this.stringToken.find(v => (this.keywords[7] === v))
                this.match[8] = this.stringToken.find(v => (this.keywords[8] === v))
                this.match[9] = this.stringToken.find(v => (this.keywords[9] === v))
                this.match[10] = this.stringToken.find(v => (this.keywords[10] === v))

                //The code below checks if the match is equal to the given keyword and gives the bot response
                if(this.match[0] === this.keywords[0]) {
                    setTimeout(() => {
                        this.chatMessages.push({
                            status: "bot",
                            message: this.response[0]
                        })
                    }, 1500)
                    this.userInput = ''
                } else if(this.match[1] === this.keywords[1]){
                    setTimeout(() => {
                        this.chatMessages.push({
                            status: "bot",
                            message: this.response[4]
                        })
                    }, 1500)
                    this.userInput = ''
                } else if(this.match[2] === this.keywords[2]){
                    setTimeout(() => {
                        this.chatMessages.push({
                            status: "bot",
                            message: this.response[5]
                        })
                    }, 1500)
                    this.userInput = ''
                }
                else if(this.match[3] === this.keywords[3]){
                    setTimeout(() => {
                        this.chatMessages.push({
                            status: "bot",
                            message: this.response[5]
                        })
                    }, 1500)
                    this.userInput = ''
                } else if(this.match[4] === this.keywords[4] || this.match[5] === this.keywords[5] || this.match[6] === this.keywords[6] ){
                    setTimeout(() => {
                        this.chatMessages.push({
                            status: "bot",
                            message: this.response[5]
                        })
                        setTimeout(() => {
                            this.$router.push('/menu')
                        }, 2000)
                    }, 1500)
                    this.userInput = ''

                }
                //else if(this.match[5] === this.keywords[5]){
                //    setTimeout(() => {
                //        this.chatMessages.push({
                //            status: "bot",
                //            message: this.response[4]
                //        })
                //    }, 1500)
                //    this.userInput = ''
                //}
                //else if(this.match[6] === this.keywords[6]){
                //    setTimeout(() => {
                //        this.chatMessages.push({
                //            status: "bot",
                //            message: this.response[4]
                //        })
                //    }, 1500)
                //    this.userInput = ''
                //}
                else if(this.match[7] === this.keywords[7]){
                    setTimeout(() => {
                        this.chatMessages.push({
                            status: "bot",
                            message: this.response[1]
                        })
                    }, 1500)
                    this.userInput = ''
                } else if(this.match[8] === this.keywords[8]) {
                    setTimeout(() => {
                        this.chatMessages.push({
                            status: "bot",
                            message: this.response[2]
                        })
                    }, 1500)
                    this.userInput = ''
                }else if(this.match[9] === this.keywords[9] || this.match[10] === this.keywords[10] ){
                    setTimeout(() => {
                        this.chatMessages.push({
                            status: "bot",
                            message: this.response[6]
                        })
                        setTimeout(() => {
                            this.$router.push('/menu')
                        }, 2000)
                    }, 1500)
                    this.userInput = ''

                }else {
                    setTimeout(() => {
                        this.chatMessages.push({
                            status: "bot",
                            message: this.response[3]
                        })
                    }, 1500)
                    this.userInput = ''
                }
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
@media screen and (max-width: 435px) {
    .form {
        width: 85%;
        /*border: 2px solid green;*/
    }
}
</style>