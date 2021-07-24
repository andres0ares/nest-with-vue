<template>
    <div class="root">
        
        <h4>Selecione as disciplinas pagas</h4>
            <button @click="handlePeriodo(1)">P1</button>
            <button @click="handlePeriodo(2)">P2</button>
            <button @click="handlePeriodo(3)">P3</button>
            <button @click="handlePeriodo(4)">P4</button>
            <button @click="handlePeriodo(5)">P5</button>
            <button @click="handlePeriodo(6)">P6</button>
            <button @click="handlePeriodo(7)">P7</button>
            <button @click="handlePeriodo(8)">P8</button>
            <button @click="handlePeriodo(9)">P9</button>
            <button @click="handlePeriodo(10)">P10</button>
            
        <div>

            <DisCard v-for="(disciplina, index) in exibDis.data" :data="disciplina" 
                :key="disciplina.id" :index="index"
                :selected="disciplina.selected"
                @click="handleClick(disciplina.id)"
            />

        </div>
        
    </div>
</template>



<script>

import DisCard from './DisCard.vue'
import disciplinas from '../assets/disciplinas'

import { reactive } from 'vue'

let dis = disciplinas 

export default {

    name: 'DisSection',
    components: { 
        DisCard 
    },
    setup() {

        let disciplinas = reactive(dis)
        let exibDis = reactive({data: disciplinas.filter(el => el.periodo == 1)})

    
       
        const handlePeriodo = (periodo) => {

            exibDis.data = disciplinas.filter(el => el.periodo == periodo)
            console.log("exibDis", exibDis)
        }

        const handleClick = (id) => {

            const idx = disciplinas.findIndex(el => el.id == id)
            disciplinas[idx].selected = !disciplinas[idx].selected
            
        }

        return {disciplinas, exibDis, handleClick, handlePeriodo}
        
    },
    data() {
        return {
            
        }
    },
    props: {
        
    },
    methods: {
        
    }
}

</script>



<style scoped>

.root {
    position: relative;
    overflow: hidden;
    display: block;
    width: 100%;
    padding: 10px;
}

</style>
