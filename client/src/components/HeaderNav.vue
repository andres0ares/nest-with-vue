
<template>
    <div class="bar">
        <p class="msg">{{ msg }} | 
            <a href="https://github.com/andres0ares/nest-with-vue"
            class="link"
            target="_blank">GitHub</a>
        </p>
    </div>
    <div class="root-header">
        <h4 class="title">{{ title }}</h4>
    </div>
    
</template>

<script>
export default {
  name: 'HeaderNav',
  props: {
    msg: String,
    title: String
  }
}

</script>


<style scoped>
.root-header {
    height: 50px;
    width: 100%;
    box-shadow: 0 7px 5px -5px gray;
}
.msg {
    color: #EAEAEA;
    padding-top: 6px;
    margin: 0;
}
.bar {
    height: 30px;
    width: 100%;
    background-color: rgb(33, 37, 37);
}
.title {
    text-align: left;
    margin: 0 0 0 25px;
    padding-top: 20px; 
    color: grey;
}
.link {
    color: #eaeaea;
    text-decoration: none;
}

</style>

