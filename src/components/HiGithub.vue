<template>
<div>
    <router-link to="home">Back</router-link>
  <p>Hi, GitHub</p>
</div>
</template>

<script>
import routerLink from './routerLink.vue'

export default {
    name: 'HiGithub',
    components: {
        routerLink
    }
}
</script>

<style>

</style>