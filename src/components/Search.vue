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