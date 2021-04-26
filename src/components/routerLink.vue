<template>
     <a v-bind:href="this.pathname+to">
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
            to: {
                type: String,
                required: true
            }
        }
    }
</script>