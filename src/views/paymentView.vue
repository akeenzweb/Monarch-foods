<template>
    <div class="home">
      <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
      <div class="head">
        <ul class="outter-ul">
          <li><img class="bot-profile" src="../assets/images/bot2.jpg"></li>
          <li><ul class="inner-ul">
            <li>Lucy</li>
            <li>Online Now</li>
          </ul></li>
          <li style="float:right;color:rgb(32,184,100);margin-right:20px;margin-top:20px;"><p class="count" style="display:inline-block;">{{count}}</p><i style="transform:scale(1.4)" class="fa fa-shopping-bag" aria-hidden="true"></i></li>
        </ul>
      </div>

      <div style="text-align:center"><i style="margin-top:50px;color: rgb(32,184,100)" class="fa fa-university fa-5x" aria-hidden="true"></i></div>
      <div class="text" style="text-align:center;margin-top: 40px;"><h1>Payment Methods</h1></div>
      <div class="button-row">
        <button class="btn-1">
            <img src="../assets/images/chip.jpeg">
        </button>
        <button class="btn-2"  @click="cashClicked()">
            <img src="../assets/images/cash.jpeg">
        </button>
      </div>

      <ul class="chat">
            <li><img src="../assets/images/bot2.jpg"></li>
            <li><h3>Almost there, please select a payment method</h3></li>
      </ul>

    </div>
</template>

<script>
export default {
    methods: {
        cashClicked() {
            //alert("Cash Clicked")
            this.$router.push('/successSplash')
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
  .home {
    /*border: 4px solid blue;*/
    margin: auto;
    width: 500px;
    font-family: 'Euclid Circular A';
  }
  .head {
    padding: 2%;
    background: rgb(32,184,100);
  }
  .bot-profile {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 3px solid #fff;
    margin-right: 20px;
  }
  .outter-ul li {
    display: inline-block;
  }
  .inner-ul li {
    display: block;
  }
  .inner-ul {
    transform: translateY(15px);
  }
  .inner-ul li:nth-child(1) {
    color: #fff;
    font-size: 18px;
    font-weight: bold;
  }
  .inner-ul li:nth-child(2) {
    color: #fff;
    font-size: 12px;
    opacity: 0.8;
  }

  .button-row {
    text-align: center;
    margin-top: 80px;
  }
  button {
    display: inline-block;
    border: none;
    /*border: 1px solid green;*/
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
    border-radius: 8px;
    margin: 10px;
    padding: 5px;
    background: #fff;
  }
  button img {
    width: 130px;
    height: 130px;
}
.btn-1 {
    animation: stagger 1.4s;
}
.btn-2 {
    animation: stagger 2.2s;
}

.text {
    animation: stagger 3.0s;
}
.chat {
    margin-top: 30px;
    animation: stagger 3.2s;
    margin-left: 40px;
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
    transform: translate(-10px, 30px);
}
h3 {
    font-size: 16px;
}
@keyframes stagger {
    from {
        opacity: 0;
        transform: translateY(140px);
    };
    to {
        opacity: 1;
        transform: translateY(0px);
    }
}


  @media screen and (max-width: 425px) {
    .home {
      width: 100%;
    }
  }
  </style>
