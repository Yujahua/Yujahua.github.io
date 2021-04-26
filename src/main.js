import Vue from 'vue'
// import App from './App.vue'
import routes from './routes'
// import routerLink from './components/routerLink.vue'

import './registerServiceWorker'

Vue.config.productionTip = false
// Vue.component('router-link',routerLink.default)

String.prototype.hash = function(){
  return this.indexOf("/#") > -1
  ? this.match(/\/#(.*)$/)[1]
  : ""
}

const app = new Vue({
  data: {
    currentRoute: window.location.href.hash()
  },
  computed: {
    ViewComponent () {
      const matchingView = routes[this.currentRoute];
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
  render (h) {
    return h(this.ViewComponent)
  }

}).$mount('#app')

window.addEventListener("popstate", () => {
  app.currentRoute = window.location.href.hash();
});
