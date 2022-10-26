<template>
  <div class="home">
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <div class="head" style="position: relative;">
      <ul class="outter-ul">
        <li><img class="bot-profile" src="../assets/images/bot2.jpg"></li>
        <li><ul class="inner-ul">
          <li>Lucy</li>
          <li @click="testLogin">Online Now</li>
        </ul></li>
        <router-link to="/orders"><li><i style="color:#fff;transform:translate(180px, 10px);right: 20px; padding-bottom: 3px" class="fa fa-cutlery fa-2x" aria-hidden="true"></i></li></router-link>
      </ul>
    </div>
    <div>
      <ChatBox1></ChatBox1>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
//import chatBox1 from '../components/chatBox1.vue'
import ChatBox1 from '../components/chatBox1.vue'

export default {
  name: 'HomeView',
  components: {
    //HelloWorld
    // chatBox1,
    ChatBox1
  },
  methods: {
    testLogin() {
      this.$router.push('/login')
    }
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
