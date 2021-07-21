<template>
    <div class="root">
        <h4>Selecione as disciplinas pagas</h4>
        <DisCard :data="teste" />
    </div>
</template>

<script>

import DisCard from './DisCard.vue'

const test = {
    name: 'Disciplina hoho',
    periodo: 1,
    creditos: 3,
    categoria: 'Obrigatória'
}

export default {

    name: 'DisSection',
    components: { 
        DisCard 
    },
    data () {
        return {
            teste: test
        }
    },
    props: {
        
    }
}

console.log(test)

</script>

<style scoped>
.root {
    width: 100%;
    padding: 10px;
    background-color: aqua;
}

</style>
