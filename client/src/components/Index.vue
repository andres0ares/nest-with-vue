<template>
  
  <HeaderNav msg="Em desenvolvimento" title="TEST NESTJS e VUEJS"/>
  <div class="section"><DisSection/></div>
  <div class="section"><DisFormSection /></div>

</template>

<script>

import DisSection from './DisSection.vue'
import DisFormSection from './DisFormSection.vue'
import HeaderNav from './HeaderNav.vue'

export default {
  name: 'Index',
  components: {
    DisSection,
    DisFormSection,
    HeaderNav
  },
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.section {
  position: static;
  float: left;
  width: 50%;
}

</style>
