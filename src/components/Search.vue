<template>
    <input type="text" v-model="search" placeholder="Search title.."/>
</template>

<script>
export default {
    name: 'Search',
    props: {
        search: String
    },
    data() {
        return {
            search: ''
        }
    }
}
</script>

<style scoped>
    input{
        outline: none;
        background: transparent;
        border: none;
        border-bottom: 2px solid white;
        margin-bottom: 30px;
        padding: 10px 5px;
        font-size: 16px;
    }
</style>