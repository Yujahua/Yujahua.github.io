<template>
<div id="webpack-dev-server-client-overlay-div" style="position: fixed; box-sizing: border-box; left: 0px; top: 0px; right: 0px; bottom: 0px; width: 100vw; height: 100vh; background-color: rgba(0, 0, 0, 0.85); color: rgb(232, 232, 232); font-family: Menlo, Consolas, monospace; font-size: large; padding: 2rem; line-height: 1.2; white-space: pre-wrap; overflow: auto;"><span style="color: #E36049">Failed to compile.</span><br><br>./src/App.vue
Module Error (from ./node_modules/eslint-loader/index.js):
<span></span>
<span><u>C:\GitHub\Yujahua.github.io\zorro\src\App.vue</u></span>
<span>  <span style="opacity:0.5;">10:8</span>  <span style="color:#E36049;">error</span>  'HomePage' is defined but never used                         <span style="opacity:0.5;">no-unused-vars</span></span>
<span>  <span style="opacity:0.5;">15:5</span>  <span style="color:#E36049;">error</span>  'HelloWorld' is not defined                                  <span style="opacity:0.5;">no-undef</span></span>
<span>  <span style="opacity:0.5;">15:5</span>  <span style="color:#E36049;">error</span>  The "HelloWorld" component has been registered but not used  <span style="opacity:0.5;">vue/no-unused-components</span></span>
<span></span>
<span><span style="color:#E36049;"><span style="font-weight:bold;">✖ 3 problems (3 errors, 0 warnings)</span></span></span>
<span><span style="color:#E36049;"><span style="font-weight:bold;"></span></span></span></div>
</template>

<script>
import Error404 from './components/Error404.vue'

export default {
    name: 'Error404'
}
</script>

<style scoped>
    .normal_line{
         font-weight:normal;opacity:1;color:#transparent;background:#transparent;
    }
</style>