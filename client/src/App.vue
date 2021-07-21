<template>
  <HeaderNav msg="Em desenvolvimento" title="Worked That Lil Bitch"/>
  <div class="section"><DisSection/></div>
  <div class="section"><DisFormSection /></div>
  <img alt="Vue logo" src="./assets/logo.png">  
  <HelloWorld msg="Welcome Bitch"/>
</template>

<script> 
import HelloWorld from './components/HelloWorld.vue'
import HeaderNav from './components/HeaderNav.vue'
import DisSection from './components/DisSection.vue'
import DisFormSection from './components/DisFormSection.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    HeaderNav,
    DisSection,
    DisFormSection
  }
}
</script>

<style>
body, html {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
.section {
  float: left;
  width: 50%;
}
</style>

//margin-top: 60px;