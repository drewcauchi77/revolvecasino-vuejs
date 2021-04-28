<template>
    <div class="container">
        <input type="text" v-model="search" placeholder="Search title.."/>
        <Games :games="filteredGames"/>
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
            search: '',
            games: []
        }
    },
    methods: {
        async fetchGames() {
            const res = await fetch('api/games')
            const data = await res.json()
            
            return data
        }
    },
    async created() {
        this.games = await this.fetchGames()
    },
    computed: {
        filteredGames() {
            return this.games.filter(game => {
                return game.name.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    }
}
</script>

<style scoped>
</style>