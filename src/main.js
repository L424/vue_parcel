import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.component('give-like', GiveLikeComponent);
import './assets/stylesheets/Normalize.css'
import './assets/awesome-font/css/font-awesome.min.css'
import GiveLikeComponent from "./components/GiveLikeComponent";
new Vue({
  render: h => h(App),
}).$mount('#app')
