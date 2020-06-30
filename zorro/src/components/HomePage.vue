<template>
    <div class="welcome">
        <header>
            ...
        </header>
        <img alt="Zorro logo" width=100 height=100 src="../assets/8346747.png">
        <h3>{{ msg }}</h3>
        <footer>页脚</footer>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
    props: {
        msg: String
    }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.welcome {
    color: 
}
</style>