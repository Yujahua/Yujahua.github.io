import Vue from 'vue'
// import App from './App.vue'
import routes from './routes'

Vue.config.productionTip = false

const app = new Vue({
  data: {
    currentRoute: window.location.pathname
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
  // render: h => h(App),
  render (h) {
    return h(this.ViewComponent)
  }

}).$mount('#app')

window.addEventListener("popstate", () => {
  app.currentRoute = window.location.pathname;
});
