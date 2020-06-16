<template>
  <div id="app">
    <div id="nav">

      <div @click="onChangePage('/micro-app-vue')">Home</div>
      <div @click="onChangePage('/micro-app-vue/about')">About</div>

    </div>

    <div
      id="subView"
      class="sub-content-wrap"
      v-html="content"
    ></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState("microApp", ["content"]),
    // ...mapState("microApp", ["mircoAppLoading"])
  },
  methods: {
    onChangePage(url) {
      console.log(url);

      this.routerGo(url, "我喜爱的男明星");
    },

    routerGo(href = "/", title = null, stateObj = {}) {
      window.history.pushState(stateObj, title, href);
    }
  }
};
</script>