<template>
    <div class="header container">
        <h1>{{ title }}</h1>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: {
        title: String    
    }
}
</script>

<style scoped>
    h1{
        text-transform: uppercase;
        text-align: center;
    }
</style>