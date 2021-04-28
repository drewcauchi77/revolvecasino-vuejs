<template>
    <div class="container">
        <Games :games="games"/>
    </div>
</template>

<script>
import Games from '../components/Games'

export default {
    name: 'Home',
    components: {
        Games
    },
    data() {
        return {
            games: []
        }
    },
    methods: {
        async fetchGames() {
            const res = await fetch('api/games')
            const data = await res.json()
            console.log(data)
            return data
        }
    },
    async created() {
        this.games = await this.fetchGames()
    }
}
</script>

<style scoped>
</style>