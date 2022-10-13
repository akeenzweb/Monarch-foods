<template>
    <div class="success-page">
        <div style="text-align: center"><i class="fa fa-check-circle-o fa-10x" aria-hidden="true"></i></div>
        <div style="text-align:center;margin-top:30px">
            <!--<img style="margin:auto;width: 250px;height:250px;" src="../assets/images/qr.png">-->
            <qrcode-vue :value="value" :size="250" level="H" />
        </div>
        <ul class="chat">
            <li><img src="../assets/images/bot2.jpg"></li>
            <li><h3>Here's your order QR code</h3></li>
        </ul>

        <ul class="chat">
            <li><img src="../assets/images/bot2.jpg"></li>
            <li><h3>This code would be scanned when your order arrives, you can find it in your orders</h3></li>
        </ul>

        <div style="text-align:center;margin-top:40px;margin-bottom: 40px;"><button @click="okay">Okay</button></div>
    </div>
</template>

<script>
import QrcodeVue from 'qrcode.vue'
    export default {
        data () {
            return {
                value: "",
                orderArray: []
            }
        },
        created() {
            this.value = this.$store.state.qrHolder
            console.log("value qr = ",this.$store.state.qrHolder)
        },
        components: {
            QrcodeVue
        },
        methods: {
            okay() {
                this.$router.push('/orders')
            }
        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Poppins:wght@300;500;600&display=swap');
@import url('http://fonts.cdnfonts.com/css/euclid-circular-a');
.success-page {
    /*background: url('../assets/images/success-background.png');
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;*/
    padding: 20px;
    font-family: 'Euclid Circular A';
}
.fa {
    color: rgb(32,184,100);
    margin-top: 50px;
}
.chat {
    margin-top: 30px;
    animation: stagger 3.2s;
    /*margin-left: 40px;*/
}
.chat li {
    display: inline-block;
    list-style: none;
}
.chat img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: 3px solid #fff;
    margin-right: 20px;
}
.chat li:nth-child(2) {
    max-width: 200px;
    padding: 5px 15px;
    border-radius: 15px;
    width: fit-content;
    background: rgb(248, 248, 248);
    border-radius: 0px 15px 15px 15px;
    transform: translate(-10px, 20px);
}
h3 {
    font-size: 16px;
}
button {
    margin: auto;
    height: 45px;
    width: 100%;
    border: none;
    color: #fff;
    background: rgb(32,184,100);
    border-radius: 8px;
}
button:active {
    transform: scale(0.9);
}
</style>