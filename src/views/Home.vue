<template>
    <div class="container">
        <Search :search="search" v-model="search"/>
        <Games :games="filteredGames"/>
    </div>
</template>

<script>
import Search from '../components/Search'
import Games from '../components/Games'

export default {
    name: 'Home',
    components: {
        Search,
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
            const url = process.env.VUE_APP_ROOT_API
            const res = await fetch(url)
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