<template>
  <div class="gray">
    <div class="welcome">
        <header>
            <span align="left" class="head_left">
              <ul><li>
                <a href="https://github.com/jiahwa" target="_blank">到我的GitHub</a>
              </li>
              </ul>
            </span>
            <span align="right" class="head_right">
              <ul>
              <li><input type="text" class="search" /></li>
              <li>
                <a href="https://github.com/jiahwa/homepage" target="_blank">
                  <svg class="GitHub" viewBox="0 0 16 16" height="32" width="32"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                </a>
              </li>
              </ul>
            </span>
        </header>
        <div class="left"></div>
        <div class="cont">
        <p class="sunset">
          <img alt="sunset" src="https://jiahwa.github.io/assets/jpeg/sunset_ori.jpeg">
        </p>
        <h1 class="zorro">
          <router-link to="github">Zorro Blog</router-link>
        </h1>
        <p align="center" class="main">
          <ul>
            <li>
              <h3 class="center">S1</h3>
              <p>昨夜西风凋碧树。<br>独上高楼，望尽天涯路</p>
              </li>
            <li>
              <h3 class="center">S2</h3>
              <p>衣带渐宽终不悔，<br>为伊消得人憔悴</p>
              </li>
            <li>
              <h3 class="center">S3</h3>
              <p>众里寻他千百度，蓦然回首,<br>那人却在灯火阑珊处</p>
              </li>
          </ul>
        </p>
        </div>
        <div class="right">
          <h1>发送留言给<span class="email">作者邮箱 </span>？</h1>
          <p align="center">
            <input type="text" class="message"/>
            <input type="button" class="send" value="send"/>
          </p>
        </div>
        <footer>
          <span class="foot">
            <ul>
              <li>© 2020-2021 jiahwa.github <a href="https://github.com/cysprout" target="_blank">cysprout</a></li>
            </ul>
          </span>
        </footer>
    </div>
  </div>
</template>

<script>
import routerLink from './routerLink.vue'

export default {
    props: {
        msg: String
    },
    components: {
      routerLink
    }
}
</script>

<style lang="scss">
a{
  text-decoration: none;
}
.welcome{
    text-align: center;
}
.left,.right{
  width: 3em;
}
.search{
  width: 10em;
  height: 1.5em;
  border: 1px solid #999;
  border-radius: 1.5em;
  background-image: url(/img/icons/search.png);
  background-position: right center;
  background-repeat: no-repeat;
  padding: 0.5em;
  outline: none;
  background-origin: content-box;
  text-indent: 0.5em;
}
.main{
  margin-bottom: 10em;
}
.main li .center{
  font-size: 1.5em;
  margin-bottom: 1.2em;
  color: #666;
}
.main li p{
  width: 15em;
}
.zorro{
  font-size: 3em;
}
.sunset{
  background-color: #000000;

  img {
    max-width: 100%;
  }
}
.right{
  width: 100%;
  height: 10em;
}
.right p{
  display: inline-block;
  position: relative;
}
.right .message{
  width: 30em;
  height: 3em;
  border-radius: 3em;
  padding-right: 5em;
  outline: none;
  text-indent: 1.5em;
  border: 1px solid #666;
}
.right .send{
  width: 8em;
  height: 3.3em;
  border-radius: 3.3em;
  border-color: #666;
  color: #fff;
  outline: none;
  position: absolute;
  right: 0;
}
.email{
  font-size: 0.8em;
  text-decoration: underline;
  font-style: italic;
}
</style>