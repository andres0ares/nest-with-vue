<template>
    <div class="d-root" v-bind:class="{ active: selected }" @click="isActive = !isActive">
        <p> {{ data.name }} <span v-bind:class="[ isActive ? dCreActive : dCre ]">- {{ data.creditos }} créditos</span></p>
        <p v-bind:class="[ isActive ? dCatActive : dCat ]"> {{ data.categoria }} </p>

    </div>
</template>

<script> 


export default {
    name: 'DisCard',
    data () {
        return {
            isActive: false
        }
    },
    props: {
        data: Object,
        index: Number,
        selected: Boolean
    },
    methods: {
       
        
    }
}


</script>

<style scoped>

.d-root {
    float: left;
    display: relative;
    overflow: hidden;
    min-width: 200px;
    min-height: 130px;
    margin: 15px 2% 0 6%;
    max-width: 40%;

    border-radius: 10px;
    border: 3px solid grey;
}

.active {
    background-color: #1fc8db;
    background-image: linear-gradient(to bottom right, #4361ee 50%, #4895ef 75%);
    color: white;
}
.dCatActive {
    font-size: 16px;
    color: white;
}

.dCreActive {
    color: white;
    font-style: italic;
    font-size: 14px;
}

.dCat {
    font-size: 16px;
    color: grey;
}
.dCre {
    font-style: italic;
    font-size: 14px;
    color: grey;
}

@media only screen and (max-width: 480px) {
  .d-root {
    width: 80%;
    
  }
}
</style>
