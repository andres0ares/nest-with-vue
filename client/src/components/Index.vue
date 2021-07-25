<template>
  
  <HeaderNav msg="Em desenvolvimento" title="TEST NESTJS e VUEJS"/>
  <div class="section"><DisSection :getObj="getObj"/></div>
  <div class="section"><DisFormSection :sendData="envio"/></div>
  <div v-if="result.show" class="section">
    <h3>Resultado</h3>
    <h5>{{ result.name }}, você possui <span class="dest">{{ result.total }}</span> horas. Total de <span class="dest">{{ result.pcent }}%</span>.</h5>
  </div>
</template>

<script>

import DisSection from './DisSection.vue'
import DisFormSection from './DisFormSection.vue'
import HeaderNav from './HeaderNav.vue'
import { reactive } from 'vue'

export default {
  name: 'Index',
  components: {
    DisSection,
    DisFormSection,
    HeaderNav
  },
  setup: () => {

    let conteudo = reactive({dis: []})
    let result = reactive({name: '', show: false, total: 0, pcent: 0})

    const getObj = (obj) => {
      conteudo.dis = obj
    }

    const envio = (obj) => {

      let dis_filtered = conteudo.dis.filter(el => el.selected == true) 
      conteudo.dis = dis_filtered

      let total = 0

      for(let i = 0; i < conteudo.dis.length; i++) {
        total = total + conteudo.dis[i].creditos;
      }

      if(obj.estagio) {
        total += 20
      }
      
      result.total = total * 15
      result.show = true
      result.name = obj.name
      result.pcent = Math.round(((total * 15) * 100) / 3735)

      console.log("result", result)
      console.log("index", conteudo)
    
    } 



    return { envio, getObj, result }
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

.dest {
  color: #4361ee;
}

</style>
