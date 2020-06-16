import Vue from 'vue'
import Vuex from 'vuex'
import persistedState from 'vuex-persistedstate';

import microApp from './micro-app/index';

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [persistedState()],
  modules: {
    microApp,
  },
})