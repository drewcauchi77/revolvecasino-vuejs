<template>
    <div class="container" v-for="g in game" :key="g.id">
        <h1>{{ g.id }}</h1>
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