<template>
  <div id="app">
    <div class="TabNav">
      <router-link to="/">首页</router-link>
      <router-link to="/login">登录</router-link>
    </div>
    <router-view></router-view>
    <HelloWorld msg="The lotus grows in mud, yet never contaminates with it" />
  </div>
</template>

<script>
import HelloWorld from "components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  created: function() {},
};
</script>

<style>
@import './assets/css/default.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.TabNav {
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  align-content: space-between;
  padding-bottom: 20px;
  border-bottom: 2px solid #f2f2f2;
}

</style>
