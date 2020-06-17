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
    <iframe src="http://localhost:8001"/>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState("microApp", ["content"])
    // ...mapState("microApp", ["mircoAppLoading"])
  },
  mounted() {
    // 注册一个观察者函数
    this.$actions.onGlobalStateChange((state, prevState) => {
      // state: 变更后的状态; prevState: 变更前的状态
      console.log("主应用观察者：token 改变前的值为 ", prevState.token);
      console.log(
        "主应用观察者：登录状态发生改变，改变后的 token 的值为 ",
        state.token
      );
    });
    this.$actions.setGlobalState({ token: 123 });
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