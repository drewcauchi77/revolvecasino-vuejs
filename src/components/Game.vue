<template>
    <router-link :to="'/casino/' + game.slug">
        <div class="game-image">
            <img :src="require(`@/assets/images/${game.code}.jpg`)">
        </div>
    
        <div class="game-details">
            <h3>{{ game.name }}</h3>
        </div>
    </router-link>
</template>

<script>
export default {
    name: 'Game',
    props: {
        game: Object
    },
}
</script>

<style scoped>
    .game-image{
        height: 350px;
        transition: 0.5s all;
    }

    h3{
        text-align: center;
        display: block;
        font-size: 22px;
        opacity: 0;
        visibility: hidden;
        transition: 0.5s all;
    }

    a:hover .game-image{
        background-color: rgba(34, 34, 51, 0.6);
    }

    a:hover h3{
        visibility: visible;
        opacity: 1;
    }

    .game-image img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1;
        position: relative;
    }

    .game-details{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        height: fit-content;
        width: fit-content;
    }

</style>