<template>
    <info :data="$store.state.todos"></info>
</template>

<script>

import info from "./info.vue"

export default {
    components:{
           info
    }
}
</script>

<style scoped>

</style>
