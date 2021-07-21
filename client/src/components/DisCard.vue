<template>
    <div class="d-root">
        <p> {{ data.name }}</p>

    </div>
</template>

<script>

export default {
    name: 'DisCard',
    props: {
        data: Object
    }
}


</script>

<style scoped>
.d-root {
    width: 100px;
    height: 50px;
    background-color: red;
}

</style>
