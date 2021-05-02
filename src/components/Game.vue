<template>
    <div class="game-image">
        <img :src="require(`@/assets/images/${game.code}.jpg`)">
    </div>

    <router-link :to="'/casino/' + game.slug">
        <div class="game-details">
            <h3>{{ game.name }}</h3>
            <span>{{ game.creator }}</span>
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
        background-color: rgba(34, 34, 51, 0.5)
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

    h3, span{
        text-align: center;
        display: block;
    }
</style>