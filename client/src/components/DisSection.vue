<template>
    <div class="root">
        
        <h4>Selecione as disciplinas pagas</h4>
            
        <button v-for="button in buttons.data" :key="button" @click="handlePeriodo(button.id)"
        v-bind:class="[ button.click ? 'btnOn' : 'btnOff' ]">
            P{{button.id}}
        </button>
            
        <div class="cards">

            <DisCard v-for="(disciplina, index) in exibDis.data" :data="disciplina" 
                :key="disciplina.id" :index="index"
                :selected="disciplina.selected"
                @click="handleClick(disciplina.id, getObj)"
            />

        </div>
        
    </div>
</template>



<script>

import { reactive } from 'vue'

import DisCard from './DisCard.vue'
import disciplinas from '../assets/disciplinas'
let dis = disciplinas 

export default {

    name: 'DisSection',
    components: { 
        DisCard 
    },
    setup() {

        let disciplinas = reactive(dis)
        let exibDis = reactive({data: disciplinas.filter(el => el.periodo == 1)})

        let buttons = reactive({data: []})

        for(let i = 1; i < 11; i++) {
            buttons.data.push({id: i, click: false})
        }

        buttons.data[0].click = true;
       
        const handlePeriodo = (periodo) => {

            exibDis.data = disciplinas.filter(el => el.periodo == periodo)

            for(let i = 0; i < 10; i++) {
                if(buttons.data[i].id != periodo){
                    buttons.data[i].click = false
                }
            }

            buttons.data[periodo -1].click = true;


        }

        const handleClick = (id, getObj) => {

            const idx = disciplinas.findIndex(el => el.id == id)
            disciplinas[idx].selected = !disciplinas[idx].selected

            getObj(disciplinas)
            
        }

        return {disciplinas, exibDis, buttons, handleClick, handlePeriodo}
        
    },
    props: {
        getObj: Function
    },
    data() {
        return {}
    }
}

</script>


<style scoped>

.root {
    position: relative;
    overflow: hidden;
    display: block;
    width: 100%;
    padding: 10px 0;
}

.btnOn {
    background-color: #4361ee;
    color: #eaeaea;
    padding: 5px;
    border-radius: 7px;
    border: 2px solid #4361ee;
    margin: 6px;
    cursor: pointer;
}

.btnOff {
    padding: 5px;
    border-radius: 7px;
    border: 2px solid grey;
    margin: 2px;
    cursor: pointer;
}

.btnOff:hover {
    border: 2px solid #4361ee;
    background-color: #5e7bfa;
}

.cards {
    margin-top: 20px;
}
</style>
