<template>
    <div class="container" v-for="g in game" :key="g.id">
        <h1>{{ g.name }}</h1>

        <div class="game">
            <h2>GAME IFRAME GOES HERE</h2>
        </div>

        <div class="game-details">
            <span>CODE: {{ g.code }}</span>
            <span>CREATOR: {{ g.creator }}</span>
            <span>CREATION DATE: {{ g.creation_date }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CasinoGame',
    data() {
        return {
            game: Object
        }
    },
    methods: {
        async fetchSingleGame() {
            const url = process.env.VUE_APP_ROOT_API + '?slug=' + this.$route.params.slug
            const res = await fetch(url)
            const data = await res.json()

            return data
        }
    },
    async created() {
        this.game = await this.fetchSingleGame()
    }
}
</script>

<style scoped>
    h1{
        text-align: center;
        text-transform: uppercase;
        font-size: 35px;
        padding-bottom: 40px;
    }

    .game{
        height: 450px;
        width: 100%;
        background-color: white;
        position: relative;
        margin-bottom: 35px;
    }

    .game h2{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        height: fit-content;
        width: fit-content;
    }

    .game-details{
        display: grid;
        grid-template-rows: repeat(3, auto);
        grid-row-gap: 15px;
        justify-content: end;
    }

    .game-details span{
        text-align: right;
    }
</style>