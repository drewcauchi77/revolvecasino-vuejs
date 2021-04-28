<template>
    <div class="container">
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style scoped>
    .container{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
    }

    nav{
        display: grid;
        grid-template-columns: repeat(2, 100px);
        margin: 0 auto;
        text-align: center;
        width: fit-content;
    }

    a{
        text-transform: uppercase;
    }
</style>