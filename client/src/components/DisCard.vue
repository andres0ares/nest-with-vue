<template>
    <div class="d-root" v-bind:class="{ 'active': selected }" >
        
        <p> {{ data.name }} <span v-bind:class="[ selected ? 'dCreActive' : 'dCre' ]">- {{ data.creditos }} créditos</span></p>
        <p v-bind:class="[ selected ? 'dCatActive' : 'dCat' ]"> {{ data.categoria }} </p>

    </div>
</template>


<script> 


export default {
    name: 'DisCard',
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
    cursor: pointer;

    border-radius: 10px;
    border: 3px solid grey;
}
.d-root:hover {
    border: 3px solid #4361ee;
}

.active {
    background-color: #1fc8db;
    background-image: linear-gradient(to bottom right, #4361ee 50%, #4895ef 75%);
    border: 3px solid #4361ee;
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
    min-width: 40%;
    max-width: none;
    min-height: 100px;
    margin: 2%;
    font-size: 10px;
    width: 30%;
    
  }
  .dCat {
    font-size: 14px;
  }
  .dCatActive {
    font-size: 14px;
  } 
}
</style>
