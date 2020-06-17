<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  // components: {
  //   HelloWorld
  // },
  data() {
    return {
    }
  },
  methods: {
  },
  created() {
    // 注册观察者函数
    // onGlobalStateChange 第二个参数为 true，表示立即执行一次观察者函数
    this.$actions.onGlobalStateChange(state => {
      const { token } = state;
      // 未登录 - 返回主页
      if (!token) {
        this.$message.error("未检测到登录信息！");
      }
      console.log("child:", token);
      // 获取用户信息
      // this.getUserInfo(token);
    }, true);
  }
};
</script>
