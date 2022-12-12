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
                <input v-model="userInput" type="text" @keyup.enter="sendMessage(); analyzeMessage();"><input type="submit" value="Send" @click="sendMessage(); analyzeMessage();" >
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
                    {status: "bot", message:  "Hello, I'm Lucy.  Would you like to order now or make an inquiry"}
                ],
                response: [
                    'COOL. Can i show you our menu?',
                    'Hi, how are you doing? Would you like to order now',
                    'Type something ...',
                    'Sorry I don\'t understand, please, type something else',
                    'Okay, what would you like to know',
                    'Awesome, Have a peek at our menu',
                    'Take a look at our menu',
                    'Our services are available from 8AM to 6PM from MONDAYS to SATURDAYS and 10AM to 9PM on SUNDAYS',
                    'Our Menu categories include Drinks, Afrcan cuisin, Pastries, Desserts and lots more. Order now to see all our Menu',
                    'My name is Lucy and i like monarch foods. I\'m a chatbot not a human, but i\'ll do my best to attend to your needs',
                    'Monarch is a food deliverying company available in Lagos as of now, we do not have a physical location but we do deliver food in and around Lagos',
                    'Hello, how are you doing? Would you like to order now',
                    'We offer Cash payment and wallet payment, though as of now, we advise you to pay with cash as we are still working on our wallet payment',
                    'Appreciate the complement',
                    'Sup'
                ],
                keywords: ['order', 'inquiry', 'takeout', 'delivery', 'okay', 'sure', 'yes', 'hello', '', 'have', 'want', 'monarch', 'time', 'category', 'categories', 'yourself', 'location', 'name', 'hi', 'located', 'payment', 'no', 'pay', 'food', 'menu', 'serve', 'inquiries', 'wow', 'cool', 'hey'],
                stringToken: null,
                match: ['match1', 'match2', 'match3', 'match4', 'match5', 'match6', 'match7', 'match8', 'match9', 'match10', 'match11', 'match12', 'match13', 'match14', 'match115', 'match16', 'match17', 'match18', 'match19', 'match20', 'match21', 'match22', 'match23', 'match24', 'match25', 'match26', 'match27', 'match28', 'martch29', 'match30']
            }
        },
        mounted() {
            if(!this.$store.state.loadSplashScreen) {
                this.$store.state.loadSplashScreen = true
                this.$router.push('/splash')
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

                this.match[11] = this.stringToken.find(v => (this.keywords[11] === v))
                this.match[12] = this.stringToken.find(v => (this.keywords[12] === v))
                this.match[13] = this.stringToken.find(v => (this.keywords[13] === v))
                this.match[14] = this.stringToken.find(v => (this.keywords[14] === v))
                this.match[15] = this.stringToken.find(v => (this.keywords[15] === v))
                this.match[16] = this.stringToken.find(v => (this.keywords[16] === v))
                this.match[17] = this.stringToken.find(v => (this.keywords[17] === v))
                this.match[18] = this.stringToken.find(v => (this.keywords[18] === v))
                this.match[19] = this.stringToken.find(v => (this.keywords[19] === v))
                this.match[20] = this.stringToken.find(v => (this.keywords[20] === v))

                this.match[21] = this.stringToken.find(v => (this.keywords[21] === v))
                this.match[22] = this.stringToken.find(v => (this.keywords[22] === v))
                this.match[23] = this.stringToken.find(v => (this.keywords[23] === v))
                this.match[24] = this.stringToken.find(v => (this.keywords[24] === v))
                this.match[25] = this.stringToken.find(v => (this.keywords[25] === v))
                this.match[26] = this.stringToken.find(v => (this.keywords[26] === v))
                this.match[27] = this.stringToken.find(v => (this.keywords[27] === v))
                this.match[28] = this.stringToken.find(v => (this.keywords[28] === v))
                this.match[29] = this.stringToken.find(v => (this.keywords[29] === v))

                //The code below checks if the match is equal to the given keyword and gives the bot response
                if(this.match[0]) {
                    setTimeout(() => {
                        this.chatMessages.push({
                            status: "bot",
                            message: this.response[0]
                        })
                    }, 1500)
                    this.userInput = ''
                } else if(this.match[1] || this.match[21] || this.match[26]){
                    setTimeout(() => {
                        this.chatMessages.push({
                            status: "bot",
                            message: this.response[4]
                        })
                    }, 1500)
                    this.userInput = ''
                } else if(this.match[2]){
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
                } else if(this.match[4] || this.match[5] || this.match[6] || this.match[23] || this.match[24] || this.match[25]){
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

                }else if(this.match[11] === this.keywords[11]){
                    setTimeout(() => {
                        this.chatMessages.push({
                            status: "bot",
                            message: this.response[10]
                        })
                    }, 1500)
                    this.userInput = ''
                }
                else if(this.match[12] === this.keywords[12]){
                    setTimeout(() => {
                        this.chatMessages.push({
                            status: "bot",
                            message: this.response[7]
                        })
                    }, 1500)
                    this.userInput = ''
                }else if(this.match[15] === this.keywords[15]){
                    setTimeout(() => {
                        this.chatMessages.push({
                            status: "bot",
                            message: this.response[9]
                        })
                    }, 1500)
                    this.userInput = ''
                }else if(this.match[16] === this.keywords[16]){
                    setTimeout(() => {
                        this.chatMessages.push({
                            status: "bot",
                            message: this.response[10]
                        })
                    }, 1500)
                    this.userInput = ''
                }
                else if(this.match[18] === this.keywords[18]){
                    setTimeout(() => {
                        this.chatMessages.push({
                            status: "bot",
                            message: this.response[11]
                        })
                    }, 1500)
                    this.userInput = ''
                }else if(this.match[19] === this.keywords[19]){
                    setTimeout(() => {
                        this.chatMessages.push({
                            status: "bot",
                            message: this.response[10]
                        })
                    }, 1500)
                    this.userInput = ''
                }else if(this.match[20] || this.match[22]){
                    setTimeout(() => {
                        this.chatMessages.push({
                            status: "bot",
                            message: this.response[12]
                        })
                    }, 1500)
                    this.userInput = ''
                }else if(this.match[27] || this.match[28]){
                    setTimeout(() => {
                        this.chatMessages.push({
                            status: "bot",
                            message: this.response[13]
                        })
                    }, 1500)
                    this.userInput = ''
                }else if(this.match[29]){
                    setTimeout(() => {
                        this.chatMessages.push({
                            status: "bot",
                            message: this.response[14]
                        })
                    }, 1500)
                    this.userInput = ''
                }

                else {
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