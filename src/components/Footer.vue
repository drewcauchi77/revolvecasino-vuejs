<template>
    <div class="footer">
        <div class="container">
            <nav>
                <router-link to="/">Home</router-link>
                <router-link to="/about">About</router-link>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style scoped>
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