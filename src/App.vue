<template>
  <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in" appear>
        <component :is="Component"></component>
      </transition>
    </router-view>

  <!--<nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>-->
  <!--<router-view/>-->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.route-enter-from {
  opacity: 0;
  /*transform: translateX(1800px);*/
}
.route-enter-to {
  opacity: 1;
  /*transform: translateX(0);*/
}
.route-enter-active {
  transition: all 0.4s ease;
}

.route-leave-from {
  opacity: 1;
  /*transform: translateX(0);*/
}
.route-leave-to {
  opacity: 0;
  /*transform: translateX(-1800px);*/
}
.route-leave-active {
  transition: all 0.4s ease;

}

</style>
