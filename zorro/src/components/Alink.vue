<template>
     <a v-bind:href="this.pathname+href">
        <slot></slot>
    </a>
</template>

<script>
    export default {
        data: function(){
            return {
                pathname: window.location.pathname +'#'
            }
        },
        props: {
            href: {
                type: String,
                required: true
            }
        }
    }
</script>