<template>
    <div class="home">
      <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
      <div class="head">
        <ul class="outter-ul">
          <li><img class="bot-profile" src="../assets/images/bot1.jpg"></li>
          <li><ul class="inner-ul">
            <li>Lucy</li>
            <li>Online Now</li>
          </ul></li>
          <li style="float:right;color:#fff;margin-right:20px;margin-top:20px;"><i style="transform:scale(1.4)" class="fa fa-shopping-bag" aria-hidden="true"></i></li>
        </ul>
      </div>
      <div>
        <CartBlock />
      </div>
    </div>
  </template>

  <script>
  // @ is an alias to /src
  //import HelloWorld from '@/components/HelloWorld.vue'
  //import chatBox1 from '../components/chatBox1.vue'
  import CartBlock from '../components/cartComponent.vue'

  export default {
    name: 'CartView',
    components: {
      //HelloWorld
      // chatBox1,
      CartBlock
  }
  }
  </script>

  <style scoped>
  * {
    margin: 0px;
    padding: 0px;
  }
  .home {
    /*border: 4px solid blue;*/
    margin: auto;
    width: 500px;
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


  @media screen and (max-width: 425px) {
    .home {
      width: 100%;
    }
  }
  </style>
