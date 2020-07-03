<template>
  <div id="app">
    <HelloWorld msg="Zorro"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
header,footer{
  color: #fff;
}
header{
  background-color: #607D8B;
  margin-bottom: 1em;
}
footer{
  background-color: #673ab7;
}

.head_left, .head_right{
  display: inline-block;
  width: 50%;
}
.foot{
  display: inline-block;
}
.GitHub{
  display: block;
  fill: currentColor;
  color: #fff;
}
.GitHub:hover{
    opacity: 0.5;
  }
.Zorro .center{
  display: inline-block;
  height: 10em;
}
</style>
