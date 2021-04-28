<template>
    <div class="container games">
        <div v-for="game in games" :key="game.id" class="single-game">
            <Game :game="game"/>
        </div>
    </div>
</template>

<script>
import Game from './Game'

export default {
    name: 'Games',
    components: {
        Game
    },
    props: {
        games: Array
    },
}
</script>

<style scoped>
    .games{
        display: grid;
        grid-row-gap: 5px;
    }

    .single-game{
        position: relative;
    }

    @media only screen and (min-width: 768px){
        .games{
            grid-template-columns: repeat(2, 1fr);
            grid-column-gap: 5px;
        }
    }

    @media only screen and (min-width: 992px){
        .games{
            grid-template-columns: repeat(3, 1fr);
            grid-column-gap: 5px;
        }
    }

    @media only screen and (min-width: 1200px){
        .games{
            grid-template-columns: repeat(4, 1fr);
            grid-column-gap: 5px;
        }
    }
</style>