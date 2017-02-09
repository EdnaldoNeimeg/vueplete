import Vue from 'vue'
import VueResource from 'vue-resource'
import Vueplete from './Vueplete.vue'

Vue.use(VueResource)

new Vue({
  el: '#main',
  components: {
    Vueplete
  }
})
