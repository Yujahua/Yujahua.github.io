import Vue from 'vue'
// import App from './App.vue'
import routes from './routes'

Vue.config.productionTip = false

String.prototype.hash = function(){
  return this.indexOf("/#") > -1
  ? this.match(/\/#(.*)$/)[1]
  : ""
}

const app = new Vue({
  data: {
    // responsive variable declare 响应式变量声明
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      const matchingView = routes[this.currentRoute == '/'
        ? window.location.href.hash()
        : this.currentRoute
      ];
      return matchingView
        ? require("./components/" + matchingView + ".vue").default
        : require("./components/Error404.vue").default
    },
    isActive() {
      return this.href == this.$root.currentRoute
    }
  },
  methods: {
    go (event) {
      event.preventDefault();
      this.currentRoute = this.href;
      window.history.pushState(
        null,
        routes[this.href],
        this.href
      )
    }
  },
  // 因为routes路由切换失效的原因，无法把渲染过后的组件绑定在App上
  // Q: 如何能让App作为顶层组件的同时，实现路由的切换呢？
  // A: ..
  // render: h => h(App),
  render (h) {
    return h(this.ViewComponent)
  }

}).$mount('#app')

window.addEventListener("popstate", () => {
  app.currentRoute = window.location.href.hash();
});
